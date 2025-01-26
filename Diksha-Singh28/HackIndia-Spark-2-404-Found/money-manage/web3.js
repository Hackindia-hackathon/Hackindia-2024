const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'https://eth-mainnet.g.alchemy.com/v2/Gaj3SIz5v0Zg0xWZHfKma2uwQxitOPFO');

module.exports = web3;
