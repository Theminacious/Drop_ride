const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");

// Add a route handler to process the request
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
//   (req, res) => {
//     // Validate the request
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Call the controller function to handle business logic
    userController.registerUser
//   }
);

module.exports = router;
