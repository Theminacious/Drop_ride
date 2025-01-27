const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");




module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
       const {fullname,email,password} = req.body;

       const isUserAlreadyExists = await userModel.findOne({email});
       if(isUserAlreadyExists){
           return res.status(400).json({message:"User already exists"});
       }

       const hashedPassword = await userModel.hashPassword(password);

       const user = await userService.createuser({
        firstname:fullname.firstname, 
        lastname:fullname.lastname,
        email,
        password:hashedPassword});
       
       const token = user.generateAuthToken();
       return res.status(201).json({user,token});

    }catch(error){
        next(error);
    }

}

module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = user.generateAuthToken();
        res.cookie("token",token);

        return res.status(200).json({user,token});
    }catch(error){
        next(error);
    }
}

module.exports.getUserProfile = async(req,res,next)=>{
    
    try{
        const user = req.user;
        return res.status(200).json({user});
    }catch(error){
        next(error);
    }
}

module.exports.logoutUser = async(req,res,next)=>{
    try{
        res.clearCookie("token");
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        await blackListTokenModel.create({token});

        return res.status(200).json({message:"Logout successful"});
    }catch(error){
        next(error);
    }
}