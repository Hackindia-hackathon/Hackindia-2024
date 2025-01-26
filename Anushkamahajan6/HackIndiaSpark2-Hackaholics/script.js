async function checkBalance() {
    const recipient = document.getElementById('recipient').value;
    if (!recipient) {
        alert('Please enter a recipient address.');
        return;
    }

    // Connect to Ethereum
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(recipient);
        const etherString = ethers.utils.formatEther(balance);
        document.getElementById('result').innerText = `Balance: ${etherString} ETH`;
    } else {
        alert('Please install MetaMask!');
    }
}

async function sendTransaction() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    if (!recipient || !amount) {
        alert('Please enter both recipient address and amount.');
        return;
    }

    // Connect to Ethereum
    if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
            to: recipient,
            value: ethers.utils.parseEther(amount)
        });
        document.getElementById('result').innerText = `Transaction Hash: ${tx.hash}`;
    } else {
        alert('Please install MetaMask!');
    }
}