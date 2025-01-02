const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { userId, pickup, destination, vehicleType } = req.body;
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        return res.status(200).json({ ride });
    } catch (error) {
        next(error);
    }
};

module.exports.getFare=async (req,res)=>{
    try{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const {pickup,destination}=req.body;
            const fare=await rideService.getFare(pickup,destination);
            return res.status(200).json({fare});
        }
        else{
            return res.status(400).json({errors:errors.array()});
        }
    }
    catch(error){
        return res.status(500).json({message:'Could not get fare'});
        }


}