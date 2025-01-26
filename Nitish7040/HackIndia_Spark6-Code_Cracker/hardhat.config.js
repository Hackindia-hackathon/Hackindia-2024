/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {},
    mainnet: {
      url:API_URL,
      accounts:  [`0x${PRIVATE_KEY}`], 
      gas: 2100000,  // Gas limit
      gasPrice: 8000000000, // Gas price (adjust as needed)
    }
  }
};
