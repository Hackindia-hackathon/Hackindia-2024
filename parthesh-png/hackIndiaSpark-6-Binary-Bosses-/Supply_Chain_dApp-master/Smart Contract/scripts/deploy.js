// Import the Hardhat runtime environment (HRE) to interact with Hardhat's functionalities.
const hre = require("hardhat");

// The main asynchronous function where the deployment process is defined.
async function main() {
  // Fetching the contract factory for "SupplyChain". A contract factory is an abstraction used to deploy new smart contracts.
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");

  // Deploying the "SupplyChain" contract. This asynchronous operation returns a contract instance.
  const supplyChain = await SupplyChain.deploy();

  // Waiting for the contract deployment to be confirmed on the blockchain.
  await supplyChain.deployed();

  // Logging the address at which the "SupplyChain" contract is deployed. This address is needed to interact with the contract in the future.
  console.log(`SupplyChain contract deployed to address: ${supplyChain.address}`);
}

// Executing the main function. If it completes successfully, the process exits with code 0 (success).
// If there's an error, it's caught, logged to the console, and the process exits with code 1 (failure).
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
