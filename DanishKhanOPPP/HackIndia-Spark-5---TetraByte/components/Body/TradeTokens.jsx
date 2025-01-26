import React, { useContext, useState, useEffect } from 'react';
import { CONTEXT } from '../../context/context'; // Update the path as needed

const TradeTokens = () => {
  const { topTokens } = useContext(CONTEXT); // Use context to get tokens
  const [search, setSearch] = useState("");
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [selectedTokenPair, setSelectedTokenPair] = useState({});

  // Filter tokens based on search input
  const onHandleSearch = (value) => {
    if (topTokens) {
      const filterTokens = topTokens.filter(token =>
        (token.token0?.symbol?.toLowerCase().includes(value.toLowerCase()) ||
        token.token0?.name?.toLowerCase().includes(value.toLowerCase()) ||
        token.token1?.symbol?.toLowerCase().includes(value.toLowerCase()) ||
        token.token1?.name?.toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredTokens(filterTokens);
    }
  };

  // Handle search input change
  useEffect(() => {
    onHandleSearch(search);
  }, [search, topTokens]); // Ensure to include topTokens as a dependency

  // Save the selected token pair to local storage
  const selectTokenPair = (pair) => {
    setSelectedTokenPair(pair);
    localStorage.setItem("tokenPair", JSON.stringify(pair));
  };

  return (
    <div className='trade-tokens-container'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search Token'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => { setSearch(""); onHandleSearch(""); }}>Clear</button>
      </div>
      <div className='tokens-list'>
        {filteredTokens.length > 0 ? (
          <ul>
            {filteredTokens.map((pair, index) => (
              <li key={index} className='token-item'>
                <div className='token-details'>
                  <h4>{pair.token0?.name} ({pair.token0?.symbol})</h4>
                  <h4>{pair.token1?.name} ({pair.token1?.symbol})</h4>
                  <button onClick={() => selectTokenPair(pair)}>Select Pair</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tokens found</p>
        )}
      </div>
    </div>
  );
};

export default TradeTokens;
