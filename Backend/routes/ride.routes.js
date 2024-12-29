const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/create-ride', (req, res) => {
    body('userId').isString().isLength({ min: 3 }).withMessage('Invalid user id'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    
    res.status(200).json({ message: 'Ride created successfully' });
});






module.exports = router;