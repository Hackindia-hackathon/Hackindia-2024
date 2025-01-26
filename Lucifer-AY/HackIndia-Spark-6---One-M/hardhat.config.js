require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 11155111
    },
    mumbai: {
      url: `https://eth-sepolia.g.alchemy.com/v2/lPUq4A-pvQz-X6L1LWsfS0_mGTX0H-0t`,
      //accounts: [process.env.privateKey]git 
    },
    matic: {
      url: "https://eth-sepolia.g.alchemy.com/v2/lPUq4A-pvQz-X6L1LWsfS0_mGTX0H-0t",
      //accounts: [process.env.privateKey]
    },
    sepolia: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [ process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};