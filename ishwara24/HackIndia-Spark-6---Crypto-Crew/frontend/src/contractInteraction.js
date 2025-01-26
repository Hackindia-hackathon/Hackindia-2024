import Web3 from 'web3';
import TransparentAdmissions from './contracts/TransparentAdmissions.json';
import SharpToken from './contracts/SharpToken.json';
import Whistleblower from './contracts/Whistleblower.json';

let web3;
let transparentAdmissions;
let sharpToken;
let whistleblower;

// Initialize the blockchain and set up the contract instances
export const initBlockchain = async (_web3, accounts) => {
    try {
        web3 = _web3;

        // Manually set the contract addresses after deployment
        const transparentAdmissionsAddress = "0xF0ece13dC58FaB300fDB04E0F9C44572690B9D10";
        const sharpTokenAddress = "0x60DedC9c211066a8248AED2f8b18a0b2C11c4a3E";
        const whistleblowerAddress = "0xB7958ef8c0704DAFBEf7F003c0C06F16B4f80bd4";

        // Initialize the contract instances
        transparentAdmissions = new web3.eth.Contract(TransparentAdmissions.abi, transparentAdmissionsAddress);
        sharpToken = new web3.eth.Contract(SharpToken.abi, sharpTokenAddress);
        whistleblower = new web3.eth.Contract(Whistleblower.abi, whistleblowerAddress);

        console.log('Contracts initialized successfully');
    } catch (error) {
        console.error("Error initializing blockchain:", error);
    }
};

// Function to submit an application
export const submitApplication = async (name, course, account) => {
    try {
        if (!transparentAdmissions) {
            throw new Error("TransparentAdmissions contract is not initialized.");
        }
        const tx = await transparentAdmissions.methods
            .submitApplication(name, course)
            .send({
                from: account,
                gas: 5000000,  // Adjust gas limit if necessary
                gasPrice: '20000000000'  // Set gas price manually for legacy support
            });

        console.log('Transaction Hash:', tx.transactionHash);
        console.log('Transaction Receipt:', tx);

        return tx;
    } catch (error) {
        console.error("Error submitting application:", error);
        throw error;  // Re-throw error to handle it in the UI if needed
    }
};

// Function to submit a whistleblowing report
export const submitWhistleblowingReport = async (report, account) => {
    try {
        if (!whistleblower) {
            throw new Error("Whistleblower contract is not initialized.");
        }
        const tx = await whistleblower.methods
            .submitWhistleblowerReport(report)
            .send({
                from: account,
                gas: 5000000,  // Adjust gas limit if necessary
                gasPrice: '20000000000'  // Set gas price manually for legacy support
            });

        console.log('Transaction Hash:', tx.transactionHash);
        console.log('Transaction Receipt:', tx);

        return tx;
    } catch (error) {
        console.error("Error submitting whistleblowing report:", error);
        throw error;  // Re-throw error to handle it in the UI if needed
    }
};

// Function to reward whistleblowers with Sharp Tokens
export const rewardWhistleblower = async (recipient, amount, account) => {
    try {
        if (!sharpToken) {
            throw new Error("SharpToken contract is not initialized.");
        }
        const tx = await sharpToken.methods
            .rewardSharpTokens(recipient, amount)
            .send({
                from: account,
                gas: 5000000,  // Adjust gas limit if necessary
                gasPrice: '20000000000'  // Set gas price manually for legacy support
            });

        console.log('Transaction Hash:', tx.transactionHash);
        console.log('Transaction Receipt:', tx);

        return tx;
    } catch (error) {
        console.error("Error rewarding Sharp Tokens:", error);
        throw error;  // Re-throw error to handle it in the UI if needed
    }
};
