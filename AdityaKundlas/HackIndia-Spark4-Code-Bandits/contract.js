// ethers.js for blockchain interaction
const { ethers } = window.ethers;

// Connect to the Polygon network (Mumbai Testnet)
const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
const privateKey = 'your-private-key';  // IMPORTANT: Use environment variables for storing keys securely!
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
