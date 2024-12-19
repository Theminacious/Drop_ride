const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.service');



module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
    try{
        const {fullname,email,password,vehicle} = req.body;
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.create({
            firstname:fullname.firstname, 
            lastname:fullname.lastname,
            email,
            password:hashedPassword,
            vehicle
        });
        const token = captain.generateAuthToken();
        return res.status(201).json({captain,token});
    }catch(error){
        next(error);
    }
}