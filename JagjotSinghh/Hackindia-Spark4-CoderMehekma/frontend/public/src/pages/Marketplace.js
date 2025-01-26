import React, { useState, useEffect } from 'react';
import NFTCard from '../components/NFTCard';
import './Marketplace4.css';
import axios from 'axios';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNFTs, setFilteredNFTs] = useState([]);
  const [nftData, setNftData] = useState([
    { id: 1, image: '/images/nft1.png', name: 'NFT One', price: '0.5', creator: 'Alice' },
    { id: 2, image: '/images/nft2.png', name: 'NFT Two', price: '1.2', creator: 'Bob' },
    { id: 3, image: '/images/nft3.png', name: 'NFT Three', price: '0.8', creator: 'Charlie' },
    { id: 4, image: '/images/nft4.png', name: 'NFT Four', price: '1.5', creator: 'David' },
    { id: 5, image: '/images/nft5.png', name: 'NFT Five', price: '2.0', creator: 'Eve' },
    { id: 6, image: '/images/nft6.png', name: 'NFT Six', price: '1.0', creator: 'Frank' },
  ]);

  // Handle search input change
  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredNFTs(nftData); // Reset to default if search term is empty
      return;
    }

    try {
      // Send the search term to the Node.js server (which interacts with Ollama)
      const response = await axios.post('http://localhost:5000/api/query', { searchTerm: term });

      const ollamaResponse = response.data.data;

      // Assuming Ollama returns relevant NFT names or creators, we filter based on the result
      const matchedNFTs = nftData.filter(nft =>
        ollamaResponse.some(result =>
          nft.name.toLowerCase().includes(result.toLowerCase()) ||
          nft.creator.toLowerCase().includes(result.toLowerCase())
        )
      );

      setFilteredNFTs(matchedNFTs);
    } catch (error) {
      console.error('Error fetching data from Ollama:', error);
      setFilteredNFTs([]); // Clear the list on error
    }
  };

  useEffect(() => {
    setFilteredNFTs(nftData); // Initially show all NFTs
  }, [nftData]);

  return (
    <div className="marketplace">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          className="search-bar1"
          type="text"
          placeholder="Where Creativity Meets AI: Own, Trade, and Vibe."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Marketplace Title */}
      <h2>Marketplace</h2>

      {/* NFT Grid */}
      <div className="nft-grid">
        {filteredNFTs.map(nft => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
