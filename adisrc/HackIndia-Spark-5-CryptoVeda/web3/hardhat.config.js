require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 73799,
    },
    volta: {
       url: process.env.API_URL,
       accounts: [`0x${process.env.PRIVATE_KEY}`],
       
    },
 
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: "volta",
    // networks: {
    //   hardhat: {},
    //   volta: {
    //      url: process.env.API_URL,
    //      accounts: [`0x${process.env.PRIVATE_KEY}`],
    //   }
   },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
