require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545'); // Ganache RPC URL

web3.eth.getAccounts().then((accounts) => {
    console.log('Sender Address:', accounts[0]); // Get the first account
});

const express = require('express');
const {Web3} = require('web3');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to Ganache (updated provider initialization)
const web3 = new Web3(process.env.GANACHE_URL);

// Load your deployed smart contract ABI (replace with the correct ABI file)
const contractABI = []; // Paste your contract ABI here
const contractAddress = process.env.CONTRACT_ADDRESS;
const admissionsContract = new web3.eth.Contract(contractABI, contractAddress);

// API Endpoint: Submit Application
app.post('/submit-application', async (req, res) => {
    try {
        const { applicationData, senderAddress } = req.body;
        const tx = await admissionsContract.methods.submitApplication(applicationData).send({ from: senderAddress });
        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// API Endpoint: Check Admission Status
app.get('/admission-status/:appId', async (req, res) => {
    try {
        const { appId } = req.params;
        const status = await admissionsContract.methods.getStatus(appId).call();
        res.json({ success: true, status });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// API Endpoint: Submit Whistleblower Report
app.post('/submit-report', async (req, res) => {
    try {
        const { reportData, whistleblowerAddress } = req.body;
        const tx = await admissionsContract.methods.submitReport(reportData).send({ from: whistleblowerAddress });
        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Start Express Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
