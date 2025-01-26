require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_RPC_URL,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_RPC_URL,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
  },
};
