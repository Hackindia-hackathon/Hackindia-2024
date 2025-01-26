// Ensure Web3.js is included and available as `window.web3`
if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
}

let userAddress;

// Connect to Ethereum wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];
            document.getElementById('output').innerText = `Wallet connected: ${userAddress}`;
            console.log("Wallet connected:", userAddress);
        } catch (error) {
            document.getElementById('output').innerText = "Error connecting wallet";
            console.error("Error connecting wallet:", error);
        }
    } else {
        document.getElementById('output').innerText = "Please install MetaMask";
        console.error("Please install MetaMask");
    }
}

// Get Ethereum balance
async function getBalance() {
    if (!userAddress) {
        document.getElementById('output').innerText = "Please connect your wallet first";
        return;
    }
    
    try {
        const balanceWei = await web3.eth.getBalance(userAddress);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        document.getElementById('balance').innerText = `Balance: ${balanceEth} ETH`;
        console.log("Balance:", balanceEth, "ETH");
    } catch (error) {
        document.getElementById('balance').innerText = "Error fetching balance";
        console.error("Error fetching balance:", error);
    }
}

// Convert currency (mocked example, you would need a real API for conversion)
async function convertCurrency() {
    const amount = 1; // Example amount in ETH
    const conversionRate = 2000; // Example conversion rate for ETH to USD
    const amountInUSD = amount * conversionRate;
    document.getElementById('output').innerText = `Converted amount: ${amountInUSD} USD`;
    console.log("Converted amount:", amountInUSD, "USD");
}

// Event listeners
document.getElementById('connectWallet').addEventListener('click', connectWallet);
document.getElementById('getBalance').addEventListener('click', getBalance);
document.getElementById('convertCurrency').addEventListener('click', convertCurrency);
