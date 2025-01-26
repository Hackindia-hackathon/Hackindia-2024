Module.exports = {
    network:{
        development:{
            host:"127.0.0.1",
            port: 7545,
            network_id:"*"

        },
    },
    compilers:{
        solc:{
            version:"0.5.16"
        },
    },
};
// IPFS & Polygon Smart Contract Interaction
// ethers.js for blockchain interaction
const { ethers } = window.ethers;

// Connect to the Polygon network (Mumbai Testnet)
const provider = new ethers.providers.JsonRpcProvider('');
const privateKey = '0x16ab67dce409a78366399aeac011d5257b7c5dfe3edf2d4d5c8aab06ec33bfbf';  // IMPORTANT: Use environment variables for storing keys securely!
const wallet = new ethers.Wallet(privateKey, provider);

// Contract ABI and address
const contractABI = [
  "function storeCID(string memory cid) public"
];
const contractAddress = "0xYourContractAddress";  // Replace with your deployed contract address

// Initialize contract
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Store CID on the Polygon blockchain
export async function storeCIDOnPolygon(cid) {
  try {
    const tx = await contract.storeCID(cid);
    console.log('Transaction sent:', tx.hash);
    await tx.wait();  // Wait for transaction confirmation
    console.log('CID stored on Polygon successfully.');
  } catch (error) {
    console.error('Error storing CID on Polygon:', error);
    throw error;
  }
}

