import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">NFT Marketplace</div>
      <div>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/login" className="mx-2 hover:underline">Login</Link>
        <Link to="/create-nfts" className="mx-2 hover:underline">Upload</Link>
      </div>
    </nav>
  );
};

export default Navbar;
