import { ethers } from 'ethers';
import { LendingPoolAddressesProvider, LendingPool } from '@aave/protocol-js';

let provider;
let signer;
let lendingPool;

async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        
        const addressesProvider = new LendingPoolAddressesProvider(provider);
        const lendingPoolAddress = await addressesProvider.getLendingPool();
        lendingPool = new LendingPool(provider, lendingPoolAddress);
        document.getElementById('status').innerText = "Wallet connected";
    } else {
        document.getElementById('status').innerText = "Please install MetaMask";
    }
}

async function depositFunds() {
    if (!lendingPool) {
        document.getElementById('status').innerText = "Connect your wallet first";
        return;
    }

    const amount = prompt("Enter amount to deposit (in ETH):");
    if (!amount) return;

    const amountInWei = ethers.utils.parseEther(amount);

    try {
        const tx = await lendingPool.deposit(
            '0xAddressOfYourAsset', // Replace with the address of the asset you want to deposit
            amountInWei,
            0
        );
        await tx.wait();
        document.getElementById('status').innerText = "Deposit successful!";
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = "Deposit failed!";
    }
}

async function borrowFunds() {
    if (!lendingPool) {
        document.getElementById('status').innerText = "Connect your wallet first";
        return;
    }

    const amount = prompt("Enter amount to borrow (in ETH):");
    if (!amount) return;

    const amountInWei = ethers.utils.parseEther(amount);

    try {
        const tx = await lendingPool.borrow(
            '0xAddressOfYourAsset', // Replace with the address of the asset you want to borrow
            amountInWei,
            1,
            0
        );
        await tx.wait();
        document.getElementById('status').innerText = "Borrow successful!";
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = "Borrow failed!";
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
document.getElementById('deposit').addEventListener('click', depositFunds);
document.getElementById('borrow').addEventListener('click', borrowFunds);
