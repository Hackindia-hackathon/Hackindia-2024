const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "3e81b02132f84ba4a892ee010e64fb49"; 
const mnemonic = "userwhale blood lens bacon jar memory mechanic erosion glimpse meat situate foster";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 7545,       
      network_id: "*",  
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,      
        gas: 4500000,        
      gasPrice: 10000000000 
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1,       
      gas: 5000000,        
      gasPrice: 20000000000 
    }
  },

  compilers: {
    solc: {
      version: "0.8.5",    
    }
  },

  mocha: {
    timeout: 100000
  },

  plugins: [
    "truffle-plugin-verify" 
    ]
};
