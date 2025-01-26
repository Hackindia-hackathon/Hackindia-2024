const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema with various fields and validation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"], // Name is required
    },
    email: {
        type: String,
        required: [true, "Please provide your email"], // Email is required
        unique: true, // Ensure email is unique
        lowercase: true, // Convert email to lowercase
    },
    membershipType: {
        type: String,
        lowercase: true, // Convert membership type to lowercase
        default: "nomember", // Default value if not provided
    },
    role: {
        type: String,
        enum: ["user", "admin"], // Role can only be 'user' or 'admin'
        default: "user", // Default role is 'user'
    },
    password: {
        type: String,
        required: [true, "Please provide your password"], // Password is required
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"], // Confirmation password is required
        validate: {
            // Custom validator to check if password and confirm password match
            validator: function(el) {
                return el === this.password;
            },
            message: "Passwords do not match", // Error message if passwords don't match
        },
    },
});

// Middleware to hash the password before saving the user document
userSchema.pre("save", async function(next) {
    // If the password field hasn't been modified, move to the next middleware
    if (!this.isModified("password")) return next();

    // Hash the password with a cost of 12 and store the hashed password
    this.password = await bcrypt.hash(this.password, 12);

    // Remove the password confirmation field
    this.passwordConfirm = undefined;

    next();
});

// Middleware to set the passwordChangedAt timestamp if the password was modified
userSchema.pre("save", function(next) {
    if (!this.isModified("password") || this.isNew) return next();

    // Set the passwordChangedAt property to the current time minus 1 second
    this.passwordChangedAt = Date.now() - 1000;

    next();
});

// Query middleware to filter out inactive users (those who have 'active' set to false)
userSchema.pre(/^find/, function(next) {
    // Add a condition to only find documents where 'active' is not equal to false
    this.find({ active: { $ne: false } });

    next();
});

// Instance method to check if the provided password matches the hashed password
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    // Compare the candidate password with the user's actual password
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method to check if the password was changed after the JWT was issued
userSchema.methods.passwordChangedAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp;
    }

    // Return false if the password has not been changed after the JWT was issued
    return false;
};

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
