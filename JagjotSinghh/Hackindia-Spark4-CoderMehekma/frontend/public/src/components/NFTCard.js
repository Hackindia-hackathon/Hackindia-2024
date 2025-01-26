// NFTCard.js
import React from 'react';
import './NFTCard.css'; // Ensure this imports your updated styles

const NFTCard = ({ image, name, price, creator }) => {
  return (
    <div className="card">
      <span></span>
      <div className="content">
        <div className="nft-info">
          <img src={'nft1.png'} alt={name} className="nft-image" />
          <h3 className="nft-name">{name}</h3>
          <p className="nft-price">Price: {price} ETH</p>
          <p className="nft-creator">Creator: {creator}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
