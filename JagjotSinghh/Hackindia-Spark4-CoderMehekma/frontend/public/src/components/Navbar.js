import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>VibeChain</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/marketplace">Marketplace</a></li>
        <li><a href="/create">Create NFT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
