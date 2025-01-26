// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1725679950886",
      gas: 6721975, // Set gas limit
      gasPrice: 20000000000 // Set gas price (20 gwei)
    }
  },
  compilers: {
    solc: {
      version: "0.8.13" // Check compatibility
    }
  }
};
