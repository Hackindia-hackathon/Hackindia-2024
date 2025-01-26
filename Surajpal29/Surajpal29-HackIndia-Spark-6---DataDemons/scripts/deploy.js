async function main() {
  try {
    const Voting = await ethers.getContractFactory("Voting");

    // Start deployment, returning a promise that resolves to a contract object
    console.log("Deploying contract...");
    const Voting_ = await Voting.deploy(["Suraj", "Mike", "Henry", "Rock"], 90);

    // Wait for the contract to be deployed
    await Voting_.deployed();

    console.log("Contract address:", Voting_.address);
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error in deployment script:", error);
    process.exit(1);
  });
