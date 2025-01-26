const Web3 = require('web3');
const web3 = new Web3("https://polygon-rpc.com"); // or Ethereum node

const contractABI = /* ABI from compiled contract */;
const contractAddress = "Your_Smart_Contract_Address";

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function authenticateUser(address) {
  const isAuthenticated = await contract.methods.authenticateUser(address).call();
  return isAuthenticated;
}