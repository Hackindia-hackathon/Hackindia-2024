const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ msg: 'User already exists' });

        const newUser = new User({ username, password, role });
        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
