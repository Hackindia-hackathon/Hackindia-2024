window.addEventListener('load', async () => {
    // Check if Web3 has been injected by the browser (MetaMask)
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const web3 = new Web3(window.ethereum);  //connecting to ehtereum through metamask wallet
        
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Ethereum');
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        alert('Please install MetaMask!');
    }

    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');

    checkButton.addEventListener('click', async () => {
        const file = document.getElementById('upload').files[0];
        if (!file) {
            alert('Please upload an image or video');
            return;
        }

        // Placeholder: You would send the file to a deepfake detection API here
        const isDeepfake = Math.random() > 0.5; // Random result for demo
        resultDiv.textContent = isDeepfake ? 'This content is likely a deepfake.' : 'This content is likely real.';
    });
});

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "verifications",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "isDeepfake",
          "type": "bool"
        }
      ],
      "name": "verifyContent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const contractAddress = '0x...'; // Deployed contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

checkButton.addEventListener('click', async () => {
    const file = document.getElementById('upload').files[0];
    if (!file) {
        alert('Please upload an image or video');
        return;
    }

    const isDeepfake = Math.random() > 0.5; // Replace with API call
    resultDiv.textContent = isDeepfake ? 'This content is likely a deepfake.' : 'This content is likely real.';

    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.verifyContent(isDeepfake).send({ from: accounts[0] });
    } catch (error) {
        console.error('Error interacting with contract', error);
    }
});
