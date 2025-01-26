
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');


const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(
        MNEMONIC,
        `https://eth-sepolia.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
      ),
      network_id: 11155111,  // Sepolia’s network ID
      gas: 5500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
