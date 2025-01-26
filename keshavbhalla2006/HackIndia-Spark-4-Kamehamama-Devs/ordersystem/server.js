const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

// Define your MongoDB connection string here
const MONGO_URI = 'mongodb://127.0.0.1:27017/ordersystem'; // Ensure the database name is correct

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  // Deprecated options can be removed
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
