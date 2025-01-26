async function main() {
  // Get the contract factory
  const Voting = await ethers.getContractFactory("Voting");

  // Deploy the contract
  const Voting_ = await Voting.deploy(["Manish", "Priyanshu", "Alok", "Nitish"], 90);

  // Wait for the deployment to complete
  await Voting_.deployed();

  // Log the contract address
  console.log("Contract deployed to address:", Voting_.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during contract deployment:", error);
    process.exit(1);
  });
