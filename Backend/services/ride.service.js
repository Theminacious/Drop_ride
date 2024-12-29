const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

async function getFare(pickup, destination, vehicleType) {
    if (!pickup || !destination || !vehicleType) {
        throw new Error('Pickup, destination, and vehicle type are required');
    }
    const distanceTime = await mapService.getDistanceTimes(pickup, destination);

    // Define the base fare, per kilometer rates, and per minute rates for different vehicle types
    const baseFare = 50; // Base fare for all rides
    const perKmRate = {
        bike: 5,
        car: 10,
        auto: 7
    };
    const perMinuteRate = {
        bike: 1,
        car: 2,
        auto: 1.5
    };

    // Extract the distance and duration from the distanceTime object
    const { distance, duration } = distanceTime;

    // Initialize the fare variable
    let fare;

    // Calculate the fare based on the vehicle type
    switch (vehicleType) {
        case 'bike':
            fare = baseFare + (distance * perKmRate.bike) + (duration * perMinuteRate.bike);
            break;
        case 'car':
            fare = baseFare + (distance * perKmRate.car) + (duration * perMinuteRate.car);
            break;
        case 'auto':
            fare = baseFare + (distance * perKmRate.auto) + (duration * perMinuteRate.auto);
            break;
        default:
            throw new Error('Invalid vehicle type');
    }

    // Return the calculated fare as an object
    return { fare };
}



module.exports.createRide = async ({
    user,pickup,destination,vehicleType
}) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }
    const fare = await getFare(pickup, destination, vehicleType);
    const ride = new rideModel({
        user,
        pickup,
        destination,
        fare: fare.fare,
    });
    return ride.save();
   
}
