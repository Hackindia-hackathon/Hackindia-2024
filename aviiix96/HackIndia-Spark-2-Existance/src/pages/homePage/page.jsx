import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import CreditCardForm from '../../components/homeCompo/CreditCardForm';
import nftGif from '../../assets/gifs/1.gif'; // Ensure the GIF path is correct
import nftGif2 from '../../assets/gifs/2.gif';

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%', // Full width for better layout
  maxWidth: '1200px', // Maximum width for responsiveness
  margin: '20px auto', // Centered the table horizontally
  boxShadow: '0 0 15px rgba(0, 153, 255, 0.8)', // Neon blue glow effect around the table
  borderRadius: '20px', // Rounded corners for a modern look
  overflow: 'hidden', // Ensures rounded corners are visible
};

const thStyle = {
  backgroundColor: '#000', // Black background for header
  color: '#fff', // White text
  padding: '15px 20px', // Padding for better spacing
  textAlign: 'left',
  borderBottom: '3px solid #FF5733', // Blue neon border for header
  fontWeight: 'bold',
};

const tdStyle = {
  backgroundColor: '#000', // Darker black background for rows
  color: '#fff', // White text
  padding: '15px 110px', // Padding for better spacing
  borderBottom: '1px solid #333', // Subtle dark border for rows
  fontWeight: 'bold',
};

const HomePage = () => {
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 via-blue-800 to-black min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="w-full bg-opacity-70 bg-black p-4 flex justify-between items-center shadow-lg fixed top-0 z-10">
        <div className="text-3xl font-bold text-white">Existance</div>
        <div>
          <button onClick={connectMetaMask} className="mx-2 hover:underline">
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect"}
          </button>
          <Link to="/create-nfts" className="mx-2 hover:underline">Upload</Link>
          <Link to="/myAssets" className="mx-2 hover:underline">My Assets</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-6xl font-bold mb-4 text-white">Welcome to NFT Collectibles</h1>
          <p className="text-xl mb-8 text-gray-300">Discover, collect, and sell extraordinary NFTs</p>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:from-green-500 hover:to-blue-600 transition mb-12"
          >
            Explore NFTs
          </button>
          {/* Modern Table */}
          <div className="flex justify-center">
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Item</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>NFT Art 1</td>
                  <td style={tdStyle}>$500</td>
                  <td style={tdStyle}>1</td>
                </tr>
                <tr>
                  <td style={tdStyle}>NFT Art 2</td>
                  <td style={tdStyle}>$750</td>
                  <td style={tdStyle}>2</td>
                </tr>
                <tr>
                  <td style={tdStyle}>NFT Art 3</td>
                  <td style={tdStyle}>$600</td>
                  <td style={tdStyle}>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Credit Card Form */}
        <div className="flex justify-center mb-12">
          <CreditCardForm />
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-6xl font-bold mb-4 text-white">SOME NFT CARDS</h1>
        </div>

        {/* NFT Card Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-12 mt-12 px-4">
          <div className="transform hover:scale-105 transition duration-500 ease-in-out bg-gray-800 p-6 rounded-4xl shadow-lg">
            <img src={nftGif2} alt="NFT" className="rounded-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">NFT Title 1</h3>
            <p className="text-gray-300">Description of NFT 1</p>
          </div>
          <div className="transform hover:scale-105 transition duration-500 ease-in-out bg-gray-800 p-6 rounded-4xl shadow-lg">
            <img src={nftGif} alt="NFT" className="rounded-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">NFT Title 2</h3>
            <p className="text-gray-300">Description of NFT 2</p>
          </div>
          <div className="transform hover:scale-105 transition duration-500 ease-in-out bg-gray-800 p-6 rounded-4xl shadow-lg">
            <img src={nftGif2} alt="NFT" className="rounded-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">NFT Title 3</h3>
            <p className="text-gray-300">Description of NFT 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
