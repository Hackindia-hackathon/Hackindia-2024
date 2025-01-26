const Web3 = require('web3');

// Connect to Infura using your project ID
const web3 = new Web3('https://mainnet.infura.io/v3/15f1819224fc41ecb7657b1dcbe4f4b6');

// Use a public Ethereum wallet address to check the balance
const walletAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';  // Public Ethereum wallet address

// Function to fetch and display the balance of the wallet
const getWalletBalance = async () => {
    try {
        // Fetch balance in Wei (smallest unit of Ether)
        const balanceWei = await web3.eth.getBalance(walletAddress);

        // Convert Wei to Ether for easier readability
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        console.log(`Balance of wallet ${walletAddress}: ${balanceEth} ETH`);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
};

// Call the function to display the wallet balance
getWalletBalance();
