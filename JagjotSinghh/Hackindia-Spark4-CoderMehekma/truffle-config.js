require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    mumbai: {
      provider: () => new HDWalletProvider({
        providerOrUrl: `https://polygon-mumbai.infura.io/v3/7fac87211d0d4d6083ffd57ea039d9b3`, // Your Infura project ID
        numberOfAddresses: 1,
      }),
      network_id: '80001', // Mumbai Testnet ID as a string
      gas: 5000000,
      gasPrice: 10000000000, // 10 Gwei (adjust if necessary)
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "^0.8.27", // Use the version you are compiling with
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
