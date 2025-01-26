const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/video_watch', { useNewUrlParser: true, useUnifiedTopology: true });

const watchTimeSchema = new mongoose.Schema({
    userId: String,
    videoId: String,
    watchTime: Number, // In seconds
    timestamp: Date
});

const WatchTime = mongoose.model('WatchTime', watchTimeSchema);

// Fetch video data from API
app.get('/api/videos', async (req, res) => {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching video data', error });
    }
});

// Save watch time to the database
app.post('/api/saveWatchTime', async (req, res) => {
    try {
        const { userId, videoId, watchTime, timestamp } = req.body;

        const newWatchEntry = new WatchTime({
            userId,
            videoId,
            watchTime,
            timestamp
        });

        await newWatchEntry.save();

        res.status(200).json({ message: 'Watch time saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving watch time', error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
