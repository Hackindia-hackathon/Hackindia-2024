import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to VibeChain</h1>
      <p className="home-description">The ultimate NFT marketplace on the Polygon network</p>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-section-title">Our Key Features</h2>

        <div className="feature-item-box feature-slide-left">
          <h2>1. Multi-Chain Support</h2>
          <p>
            Allow users to mint, buy, and sell NFTs across multiple blockchains like Ethereum, Polygon, and Binance Smart Chain. 
            Most platforms stick to one blockchain, but providing a multi-chain experience reduces fees (on cheaper chains like Polygon) and gives users more flexibility.
          </p>
        </div>

        <div className="feature-item-box feature-slide-right">
          <h2>2. Dynamic Royalties</h2>
          <p>
            Enable dynamic royalties, where creators can adjust their royalty percentages over time or set conditional royalties based on factors like resale price or buyer reputation. 
            Unlike fixed royalties, this adds flexibility for creators, giving them control over how their earnings evolve.
          </p>
        </div>

        <div className="feature-item-box feature-slide-left">
          <h2>3. AI-Driven Recommendations</h2>
          <p>
            Integrate AI to recommend NFTs to users based on their interests, browsing habits, and previous purchases. 
            This provides a more personalized browsing experience than traditional search or filter options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
