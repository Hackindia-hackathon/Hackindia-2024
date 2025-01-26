import { useState } from 'react';
import axios from 'axios';

function Generate() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState(null);

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate', { prompt });
      setOutput(response.data);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div>
      <h2>Generate AI Content</h2>
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your prompt"
      />
      <button onClick={handleGenerate}>Generate</button>
      {output && (
        <div>
          <h3>Generated Content:</h3>
          <p>{output.text}</p>
          <img src={output.image} alt="Generated" />
          <audio controls>
            <source src={output.sound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default Generate;
