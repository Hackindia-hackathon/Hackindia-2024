const web3 = require('../web3');

const address = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const abi = [ 
  // Paste your ABI here
];

const contract = new web3.eth.Contract(abi, address);

module.exports = contract;