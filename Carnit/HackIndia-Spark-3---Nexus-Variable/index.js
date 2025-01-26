const { ethers } = require("hardhat");

async function main() {
  const Flux1NFT = await ethers.getContractFactory("Flux1NFT");
  const flux1NFT = await Flux1NFT.deploy();
  await flux1NFT.deployed();
  console.log("Contract deployed to address:", flux1NFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
