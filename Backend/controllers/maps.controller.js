const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


module.exports.getCoordinates=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        const address = req.query.address;
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    }catch(error){
       res.status(500).json({message:'Could not fetch coordinates'});
    }
}


module.exports.getDistanceTimes=async(req,res,next)=>{
    try{
       const errors = validationResult(req);
         if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
         }
         const {origin,destination} = req.query;
         const distanceTime = await mapService.getDistanceTimes(origin,destination);
            res.status(200).json(distanceTime);
    }
    catch(error){
        res.status(500).json({message:'Could not fetch distance and time'});
    }
}

module.exports.getAutoCompleteSuggestions=async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const input = req.query.input;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    }catch(error){
        res.status(500).json({message:'Could not fetch suggestions'});
    }
}