const StoryModel = require('../models/storyModel');
const axios = require('axios');

async function generateStory(prompt) {
  const response = await axios.post(process.env.AI_ENDPOINT, {
    prompt: prompt,
    max_tokens: 100,
  }, {
    headers: { 'Authorization': `Bearer ${process.env.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
        }` }
  });
  return response.data.choices[0].text;
}

exports.getStoryById = async (id) => {
  return StoryModel.findById(id).exec();
};

exports.createStory = async (title, prompt) => {
  const content = await generateStory(prompt);
  const newStory = new StoryModel({ title, content });
  return newStory.save();
};
