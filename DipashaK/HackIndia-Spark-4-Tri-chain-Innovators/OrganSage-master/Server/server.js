const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
require('dotenv').config(); // Ensure this is at the top to load env variables

const app = express();
const port = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Import routes
const donorsRouter = require('./routes/api/donors');
const hospitalsRouter = require('./routes/api/hospitals');
app.use('/api/donors', donorsRouter);
app.use('/api/hospitals', hospitalsRouter);

// Home route
app.get("/", function (req, res) {
    res.send("This is the home page");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// MongoDB connection
const mongoURI = process.env.MONGODB_URI; // Ensure this is set in your .env file

// Log the MongoDB URI for debugging (be cautious not to log sensitive info in production)
console.log("MongoDB URI:", mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Established with MongoDB!");
        // Start the server after successful DB connection
        app.listen(port, () => {
            console.log(`Server is running on Port: ${port}`);
        });
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });
