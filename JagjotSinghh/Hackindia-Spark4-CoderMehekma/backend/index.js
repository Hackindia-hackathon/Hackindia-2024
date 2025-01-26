// Import required modules
require('dotenv').config();
const express = require('express');
const Web3 = require('web3');

// Initialize express app
const app = express();
app.use(express.json());  // For parsing JSON requests

// Connect to the Ethereum network via Infura
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));

// Load your contract's ABI and deployed contract address
const contractABI = require('./build/contracts/YourContract.json').abi; // Update path to ABI
const contractAddress = "../contracts/mynft.sol"; // Replace with your deployed contract address

// Create contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Endpoint to mint an NFT
app.post('/mint', async (req, res) => {
    try {
        const { toAddress, tokenURI } = req.body;
        
        const accounts = await web3.eth.getAccounts(); // Fetch accounts
        const receipt = await contract.methods.mint(toAddress, tokenURI).send({
            from: accounts[0], // Replace with your contract owner's address or unlock a specific account
            gas: 3000000
        });

        res.status(200).json({
            message: 'NFT minted successfully!',
            transactionHash: receipt.transactionHash
        });
    } catch (error) {
        res.status(500).json({ message: 'Minting failed', error: error.message });
    }
});

// Endpoint to fetch all NFTs
app.get('/nfts', async (req, res) => {
    try {
        // Fetch and return NFT details from your contract here
        const totalSupply = await contract.methods.totalSupply().call();
        const nfts = [];
        for (let i = 0; i < totalSupply; i++) {
            const tokenId = await contract.methods.tokenByIndex(i).call();
            const tokenURI = await contract.methods.tokenURI(tokenId).call();
            nfts.push({ tokenId, tokenURI });
        }
        res.status(200).json(nfts);
    } catch (error) {
        res.status(500).json({ message: 'Fetching NFTs failed', error: error.message });
    }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
