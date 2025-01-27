const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const rideController = require('../controllers/ride.controller');
const { body, query } = require('express-validator');

router.post('/create-ride',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isLength({ min: 3 }).withMessage('Invalid vehicle type'),
    rideController.createRide
);

router.post('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare
);

module.exports = router;
