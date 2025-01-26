// web3-interaction.js

let web3;
let userAccount;

// Check if Web3 is injected (e.g., by MetaMask)
window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        web3 = new Web3(window.ethereum);

        // Connect to MetaMask wallet
        document.getElementById('connectWalletBtn').addEventListener('click', async () => {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3.eth.getAccounts();
                userAccount = accounts[0];
                alert(`Connected to wallet: ${userAccount}`);
                document.getElementById('connectWalletBtn').innerText = `Wallet Connected: ${userAccount.substring(0, 6)}...`;
            } catch (error) {
                console.error(error);
                alert('Failed to connect wallet. Please try again.');
            }
        });
    } else {
        alert('MetaMask not detected! Please install MetaMask to use Web3 features.');
    }
});

// Example: Interact with a smart contract
async function interactWithContract() {
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const contractABI = []; // Your contract ABI

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Example function call to the smart contract
    try {
        const result = await contract.methods.yourContractMethod().call({ from: userAccount });
        console.log('Smart Contract Result:', result);
    } catch (error) {
        console.error('Error interacting with smart contract:', error);
    }
}
