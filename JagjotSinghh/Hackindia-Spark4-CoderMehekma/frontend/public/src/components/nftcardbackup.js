import React from 'react';
import './NFTCard.css';

const NFTCard = ({ image, name, price, creator }) => {
  return (
    <div className="nft-card">
      <img src={image} alt={name} className="nft-image" />
      <h3 className="nft-name">{name}</h3>
      <p className="nft-price">Price: {price} ETH</p>
      <p className="nft-creator">Created by: {creator}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default NFTCard;
