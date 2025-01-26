// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Create Automation Rule
// function createAutomation() {
//     const device = document.getElementById('device').value;
//     const condition = document.getElementById('condition').value;
//     const action = document.getElementById('action').value;

//     if (condition === "" || action === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const output = `Automation Rule Created:
//     Device: ${device.charAt(0).toUpperCase() + device.slice(1)}
//     Condition: ${condition}
//     Action: ${action}`;

//     document.getElementById('automation-output').textContent = output;
// }

// // Toggle Feature Content
// function toggleFeature(element) {
//     const content = element.nextElementSibling;
//     if (content.style.display === "block") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "block";
//     }
// }
// const abi = [
//     "function turnOn() public",
//     "function turnOff() public",
//     "function toggle() public",
//     "function getStatus() public view returns (bool)"
//   ];
  
//   const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
  
//   // Connect to the Ethereum network using MetaMask or a provider
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
  
//   // Connect to the contract
//   const bulbContract = new ethers.Contract(contractAddress, abi, signer);
  
//   // Function to turn the bulb on
//   async function turnBulbOn() {
//     try {
//       const tx = await bulbContract.turnOn();
//       await tx.wait(); // Wait for the transaction to be mined
//       console.log("Bulb turned on!");
//     } catch (error) {
//       console.error("Error turning bulb on:", error);
//     }
//   }
  
//   // Function to turn the bulb off
//   async function turnBulbOff() {
//     try {
//       const tx = await bulbContract.turnOff();
//       await tx.wait();
//       console.log("Bulb turned off!");
//     } catch (error) {
//       console.error("Error turning bulb off:", error);
//     }
//   }
  
//   // Function to toggle the bulb
//   async function toggleBulb() {
//     try {
//       const tx = await bulbContract.toggle();
//       await tx.wait();
//       console.log("Bulb toggled!");
//     } catch (error) {
//       console.error("Error toggling bulb:", error);
//     }
//   }
  
//   // Function to get the current status of the bulb
//   async function getBulbStatus() {
//     try {
//       const status = await bulbContract.getStatus();
//       console.log("Current Bulb Status:", status ? "On" : "Off");
//     } catch (error) {
//       console.error("Error getting bulb status:", error);
//     }
//   }
  
//   // Example function to connect MetaMask (optional for first-time users)
//   async function connectMetaMask() {
//     try {
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       console.log('MetaMask connected');
//     } catch (error) {
//       console.error('MetaMask connection failed:', error);
//     }
//   }
  
//   // Connect MetaMask (you can call this function on button click or on page load)
//   connectMetaMask();










// Import Ethers.js (if using Node.js environment)
// const { ethers } = require("ethers"); // Uncomment for Node.js setup

// Note: If you include Ethers.js using a CDN, like in the browser setup, you don't need the above line.
// Include this CDN in your HTML file's <head> section: 
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>

// Contract ABI and Address (replace with your own deployed contract values)
const abi = [
    "function turnOn() public",
    "function turnOff() public",
    "function toggle() public",
    "function getStatus() public view returns (bool)"
  ];
  
  const contractAddress = "0x78e09bD1fA6EA3CFa8EC8Af46B2F72c567cE205e"; // Replace with your contract address
  
  // Connect to the Ethereum network using MetaMask or a provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  // Connect to the contract
  const bulbContract = new ethers.Contract(contractAddress, abi, signer);
  
  // Function to turn the bulb on
  async function turnBulbOn() {
    try {
      const tx = await bulbContract.turnOn();
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Bulb turned on!");
    } catch (error) {
      console.error("Error turning bulb on:", error);
    }
  }
  
  // Function to turn the bulb off
  async function turnBulbOff() {
    try {
      const tx = await bulbContract.turnOff();
      await tx.wait();
      console.log("Bulb turned off!");
    } catch (error) {
      console.error("Error turning bulb off:", error);
    }
  }
  
  // Function to toggle the bulb
  async function toggleBulb() {
    try {
      const tx = await bulbContract.toggle();
      await tx.wait();
      console.log("Bulb toggled!");
    } catch (error) {
      console.error("Error toggling bulb:", error);
    }
  }
  
  // Function to get the current status of the bulb
  async function getBulbStatus() {
    try {
      const status = await bulbContract.getStatus();
      console.log("Current Bulb Status:", status ? "On" : "Off");
    } catch (error) {
      console.error("Error getting bulb status:", error);
    }
  }
  
  // Example function to connect MetaMask (optional for first-time users)
  async function connectMetaMask() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('MetaMask connected');
    } catch (error) {
      console.error('MetaMask connection failed:', error);
    }
  }
  
  // Connect MetaMask (you can call this function on button click or on page load)
  connectMetaMask();
  