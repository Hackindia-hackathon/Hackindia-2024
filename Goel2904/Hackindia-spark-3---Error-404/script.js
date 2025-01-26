const contractAddress = [
  {
      "constant": false,
      "inputs": [
          {
              "name": "tokenURI",
              "type": "string"
          }
      ],
      "name": "createNFT",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "tokenURI",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "tokenCounter",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "approved",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "to",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  }
]
;
const contractABI = [];

let web3;
let nftContract;

async function load() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        alert("Please install MetaMask to use this app.");
    }

    nftContract = new web3.eth.Contract(contractABI, contractAddress);
    loadGallery();
}

async function createNFT() {
    const accounts = await web3.eth.getAccounts();
    const tokenURI = document.getElementById('tokenURI').value;

    try {
        await nftContract.methods.createNFT(tokenURI).send({ from: accounts[0] });
        document.getElementById('status').innerText = "NFT created successfully!";
        loadGallery();
    } catch (error) {
        document.getElementById('status').innerText = "Error creating NFT.";
    }
}
window.addEventListener('load', load);
