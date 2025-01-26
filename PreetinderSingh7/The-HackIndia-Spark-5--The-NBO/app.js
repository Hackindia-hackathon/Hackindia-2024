window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        // Create a web3 instance using MetaMask's provider
        window.web3 = new Web3(window.ethereum);

        // Show a message saying MetaMask is detected
        document.getElementById('connectButton').innerText = 'MetaMask Detected! Click to Connect';
    } else {
        alert('Please install MetaMask!');
        document.getElementById('connectButton').innerText = 'Install MetaMask';
        return; // Stop execution if MetaMask is not available
    }
});

const connectButton = document.getElementById('connectButton');
const accountDisplay = document.getElementById('accountDisplay');
const balanceDisplay = document.getElementById('balanceDisplay');
const sendEthForm = document.getElementById('sendEthForm');
const transactionStatus = document.getElementById('transactionStatus');
const showHistoryButton = document.getElementById('showHistoryButton');
const transactionHistory = document.getElementById('transactionHistory');
const networkDisplay = document.getElementById('networkDisplay');

let userAccount;

// Connect to MetaMask
connectButton.addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];
            accountDisplay.innerText = `Connected Account: ${userAccount}`;

            // Display account balance
            const balance = await web3.eth.getBalance(userAccount);
            balanceDisplay.innerText = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;

            // Display the current network
            const networkId = await web3.eth.net.getId();
            const networkType = await web3.eth.net.getNetworkType();
            networkDisplay.innerText = `Network: ${networkType} (ID: ${networkId})`;

        } catch (error) {
            console.error('User denied account access', error);
            alert('Failed to connect MetaMask. Check the console for more details.');
        }
    } else {
        alert('MetaMask is not installed.');
    }
});

// Handle sending Ether
sendEthForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const recipientAddress = document.getElementById('recipientAddress').value;
    const ethAmount = document.getElementById('ethAmount').value;

    if (window.ethereum && userAccount) {
        try {
            const transactionParameters = {
                to: recipientAddress,
                from: userAccount,
                value: web3.utils.toHex(web3.utils.toWei(ethAmount, 'ether'))
            };

            // Send transaction
            const txHash = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            transactionStatus.innerText = `Transaction sent! TX Hash: ${txHash}`;
            console.log('Transaction Hash:', txHash);

        } catch (error) {
            console.error('Transaction failed', error);
            transactionStatus.innerText = 'Transaction failed. Check console for details.';
        }
    } else {
        alert('Connect MetaMask account first.');
    }
});

// Show recent transactions
showHistoryButton.addEventListener('click', async () => {
    transactionHistory.innerHTML = ''; // Clear previous history

    if (userAccount) {
        try {
            // Get recent transactions (limited for simplicity)
            const transactions = await web3.eth.getPastLogs({
                address: userAccount,
                fromBlock: 'latest',
                toBlock: 'latest'
            });

            if (transactions.length > 0) {
                transactions.forEach((tx) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Tx Hash: ${tx.transactionHash}`;
                    transactionHistory.appendChild(listItem);
                });
            } else {
                transactionHistory.innerHTML = '<li>No recent transactions found.</li>';
            }

        } catch (error) {
            console.error('Failed to fetch transactions', error);
            alert('Could not fetch transaction history.');
        }
    } else {
        alert('Please connect MetaMask account first.');
    }
});