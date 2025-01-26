// wallet.js

document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectButton');
    const walletDetails = document.getElementById('walletDetails');
    const accountAddress = document.getElementById('accountAddress');
    const accountBalance = document.getElementById('accountBalance');

    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        connectButton.onclick = async () => {
            try {
                // Request account access
                await ethereum.request({ method: 'eth_requestAccounts' });

                // Create a Web3 provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                // Get the user's Ethereum account address
                const address = await signer.getAddress();
                accountAddress.innerText = Account; {address};

                // Get the user's balance
                const balance = await provider.getBalance(address);
                accountBalance.innerText = Balance; {ethers.utils.formatEther(balance)} ETH;

                // Show wallet information
                walletDetails.classList.remove('hidden');

            } catch (error) {
                if (error.code === 4001) {
                    // User rejected request
                    alert('Please connect to MetaMask.');
                } else {
                    console.error('Unexpected error:', error);
                    alert('An unexpected error occurred. Please try again.');
                }
            }
        };
    } else {
        alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
});