// Import required modules
const jwt = require("jsonwebtoken"); // For generating and verifying JWT tokens
const User = require("../Model/userModel"); // Importing the User model

// Function to sign a JWT token with the user's ID
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN, // Set token expiration time from environment variables
    });
};

// Function to create and send a JWT token in a cookie, and respond with user data
const createSendToken = (user, statusCode, req, res) => {
    // Sign the token with the user's ID
    const token = signToken(user._id);

    // Set the JWT cookie with the token
    res.cookie("jwt", token, {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000 // Calculate expiration date
        ),
        httpOnly: true, // Cookie cannot be accessed by JavaScript, only sent to the server
        secure: req.secure || req.headers["x-forwarded-proto"] === "https", // Set cookie as secure if the request is secure
    });

    // Remove the password from the output
    user.password = undefined;

    // Send the response with the token and user data
    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user,
        },
    });
};

// Sign up new user and send token
exports.signUp = async (req, res, next) => {
    // Create a new user with the provided data
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    // Send token to client and respond with user data
    createSendToken(newUser, 201, req, res);
};

// Log in existing user and send token
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "Please provide both email and password",
        });
    }

    // Find the user by email and include the password field
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists and password is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({
            status: "fail",
            message: "Incorrect email or password",
        });
    }

    // Send token to client and respond with user data
    createSendToken(user, 200, req, res);
};

// Update user membership and respond with updated user data
exports.buyMembership = async (req, res, next) => {
    // Update user's membership type
    const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        {
            membershipType: req.body.membershipType,
        },
        {
            new: true, // Return the updated document
            runValidators: true, // Run validation on the update
        }
    );

    // Respond with the updated user data
    res.status(200).json({
        status: "success",
        data: {
            user: updatedUser,
        },
    });
};
