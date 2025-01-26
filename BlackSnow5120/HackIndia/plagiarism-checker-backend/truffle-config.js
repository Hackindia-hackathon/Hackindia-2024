const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache default port
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity version
    },
  },
};
