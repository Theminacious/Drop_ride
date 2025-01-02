const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create-ride', (req, res) => {
    authMiddleware.authUser;
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isLength({ min: 3 }).withMessage('Invalid vehicle type'),
    rideController.createRide(req, res);
    
    res.status(200).json({ message: 'Ride created successfully' });
});






module.exports = router;