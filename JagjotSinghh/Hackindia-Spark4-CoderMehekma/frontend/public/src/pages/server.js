const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

// API route to query Ollama
app.post('/api/query', async (req, res) => {
  const { searchTerm } = req.body;
  
  try {
    // Replace with the actual Ollama API endpoint and key if needed
    const response = await axios.post('http://localhost:1134/', {
      prompt: searchTerm
    });
    
    res.json({ data: response.data });
  } catch (error) {
    console.error('Error querying Ollama:', error);
    res.status(500).json({ error: 'Failed to query Ollama' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
