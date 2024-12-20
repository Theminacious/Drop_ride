const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.service');
blackListTokenModel = require('../models/blacklistToken.model');



module.exports.registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
    try{
        const {fullname,email,password,vehicle } = req.body;

        const isCaptainExists = await captainModel.findOne({email});
        if(isCaptainExists){
            return res.status(400).json({message:"Captain already exists"});
        }
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
            firstname:fullname.firstname, 
            lastname:fullname.lastname,
            email,
            password:hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicletype:vehicle.vehicletype
        });
        const token = captain.generateAuthToken();
        return res.status(201).json({captain,token}); 
    }catch(error){
        next(error);
    }
}

module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
    try{
        const {email,password} = req.body;
        const captain = await captainModel.findOne({email}).select("+password");
        if(!captain){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isPasswordValid = await captain.comparePassword(password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = captain.generateAuthToken();
        res.cookie("token",token);
        return res.status(200).json({token,captain});
    }catch(error){
        next(error);
    }
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    try{
        const captain = req.captain;
        return res.status(200).json({captain});
    }catch(error){
        next(error);
    }
}

module.exports.logoutCaptain = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        await blackListTokenModel.create({token});
        res.clearCookie("token");
        return res.status(200).json({message:"Logout successful"});
    }catch(error){
        next(error);
    }
}