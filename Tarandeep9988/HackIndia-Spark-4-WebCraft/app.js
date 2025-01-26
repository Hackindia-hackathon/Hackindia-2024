let web3;
let contract;
const contractAddress = '0xYourSmartContractAddress'; // Replace with your smart contract address
const contractABI = [ /* ABI from Remix after deploying */ ]; // Replace with your contract's ABI

// Initialize Web3 and contract
if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    
    // Request account access
    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            document.getElementById('user-info').innerText = `Logged in as: ${accounts[0]}`;
            document.getElementById('dashboard').style.display = 'block';
            document.getElementById('registration').style.display = 'none';

            // Initialize contract
            contract = new web3.eth.Contract(contractABI, contractAddress);
        })
        .catch(err => console.error(err));
}

// Handle registration
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    // For now, we just log the user info
    console.log(`User Registered: ${username}, ${email}, Role: ${role}`);
    alert('Registration successful!');
});

// Handle adding land
document.getElementById('land-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const owner = document.getElementById('land-owner').value;
    const location = document.getElementById('land-location').value;
    const size = document.getElementById('land-size').value;

    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.addLand(owner, location, size).send({ from: accounts[0] });
        document.getElementById('transaction-status').innerText = 'Land added successfully!';
    } catch (error) {
        document.getElementById('transaction-status').innerText = 'Transaction failed!';
        console.error(error);
    }
});
