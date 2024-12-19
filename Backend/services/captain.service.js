const captainModel = require('../models/captain.model');



module.exports.createCaptain  = async ({
    firstname,lastname,email,password,
})=>{
    if(!firstname || !email || !password){
        throw new Error("Please fill all the fields");
    }
    const captain = await captainModel.create({
       fullname:{
        firstname, 
        lastname,
        }, 
        email,
        password
    });
    return captain;
}