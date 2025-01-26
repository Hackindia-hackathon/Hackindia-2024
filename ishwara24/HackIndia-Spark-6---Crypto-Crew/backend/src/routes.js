const express = require('express');
const router = express.Router();
const { web3 } = require('./app'); // Import the web3 instance from app.js

// Example endpoint to get accounts from Ganache
router.get('/accounts', async (req, res) => {
    try {
        const accounts = await web3.eth.getAccounts();
        res.status(200).send({ accounts });
    } catch (error) {
        res.status(500).send({ message: 'Error fetching accounts', error });
    }
});

// Endpoint to submit an application (simple example)
router.post('/submit-application', async (req, res) => {
    const { applicationData, senderAddress } = req.body;

    try {
        // Simulate transaction (add your smart contract interaction here)
        const receipt = await web3.eth.sendTransaction({
            from: senderAddress,
            to: '0xRecipientAddress',  // Replace with the contract address or recipient
            value: web3.utils.toWei('0.01', 'ether'), // Example value
            data: web3.utils.asciiToHex(applicationData)
        });

        res.status(200).send({
            success: true,
            txHash: receipt.transactionHash,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Transaction failed',
            error: error.message,
        });
    }
});

// Example endpoint to check application status
router.get('/admission-status/:appId', async (req, res) => {
    const appId = req.params.appId;

    // Logic to fetch application status (replace with smart contract logic)
    // Example:
    const status = 'pending'; // Replace with actual logic from the contract

    res.status(200).send({
        success: true,
        status,
    });
});

module.exports = router;
