import React, { useState } from 'react';

const AddTokenPair = () => {
  const [tokenA, setTokenA] = useState('');
  const [tokenB, setTokenB] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tokenA || !tokenB) {
      setMessage('Please enter both token addresses.');
      return;
    }

    // Add logic to handle the token pair addition, such as calling an API
    // For now, just showing a success message
    setMessage(`Token Pair Added: ${tokenA} & ${tokenB}`);
    setTokenA('');
    setTokenB('');
  };

  return (
    <div>
      <h2>Add Token Pair</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tokenA">Token A Address:</label>
          <input
            type="text"
            id="tokenA"
            value={tokenA}
            onChange={(e) => setTokenA(e.target.value)}
            placeholder="Enter Token A address"
          />
        </div>
        <div>
          <label htmlFor="tokenB">Token B Address:</label>
          <input
            type="text"
            id="tokenB"
            value={tokenB}
            onChange={(e) => setTokenB(e.target.value)}
            placeholder="Enter Token B address"
          />
        </div>
        <button type="submit">Add Token Pair</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTokenPair;
