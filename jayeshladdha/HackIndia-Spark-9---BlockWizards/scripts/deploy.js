// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    const SecureLoan = await hre.ethers.getContractFactory("SecureLoan");
    const secureLoan = await SecureLoan.deploy();

    await secureLoan.deployed();

    console.log("SecureLoan deployed to:", secureLoan.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });