const express = require('express');
const router = express.Router();
const authMiddeleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller');
const {query} = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddeleware.authUser, mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddeleware.authUser, mapController.getDistanceTimes
)

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddeleware.authUser, mapController.getAutoCompleteSuggestions
)

module.exports = router;