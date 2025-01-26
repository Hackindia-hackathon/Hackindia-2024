// Import the express framework
const express = require('express');

// Import the authentication controller, which contains the functions for signup, login, and membership purchase
const authController = require("../Controllers/authController");

// Create a new express router instance to handle routes related to authentication and membership
const router = express.Router();

// Route to handle user signup, connects to the signUp function in authController
router.post("/signup", authController.signUp);

// Route to handle user login, connects to the login function in authController
router.post("/login", authController.login);

// Route to handle membership purchase, connects to the buyMembership function in authController
router.post("/buyMembership", authController.buyMembership);

// Export the router to be used in other parts of the application
module.exports = router;
