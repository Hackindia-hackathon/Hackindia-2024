const StoryService = require('../services/storyService');
const ImageService = require('../services/imageService');
const fs = require('fs');
const path = require('path');

exports.createStory = async (req, res) => {
  try {
    const { title, prompt } = req.body;
    const content = await StoryService.generateStory(prompt);
    
    // Create image with text
    const imageBuffer = await ImageService.createImageWithText(content);
    const imagePath = path.join(__dirname, '../public/images', `${title}.png`);
    fs.writeFileSync(imagePath, imageBuffer);
    
    // Save story and image path to database
    const newStory = await StoryService.createStory(title, content, imagePath);
    res.status(201).json({ story: newStory, imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

