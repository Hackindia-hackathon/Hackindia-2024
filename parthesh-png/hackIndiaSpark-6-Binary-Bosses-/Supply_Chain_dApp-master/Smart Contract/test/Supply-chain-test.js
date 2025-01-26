const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SupplyChain", function () {
  let supplyChain;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const SupplyChain = await ethers.getContractFactory("SupplyChain");
    supplyChain = await SupplyChain.deploy();
    await supplyChain.deployed();
  });

  it("Should add a participant", async function () {
    await supplyChain.addParticipant("Alice", "password", addr1.address, "Manufacturer");
    const [userName, participantAddress, participantType] = await supplyChain.getParticipant(0);

    expect(userName).to.equal("Alice");
    expect(participantAddress).to.equal(addr1.address);
    expect(participantType).to.equal("Manufacturer");
  });

  it("Should add a product", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    const [modelNumber, partNumber, serialNumber, cost, , ] = await supplyChain.getProduct(0);

    expect(modelNumber).to.equal("Model123");
    expect(partNumber).to.equal("Part456");
    expect(serialNumber).to.equal("Serial789");
    expect(cost.toNumber()).to.equal(100);
  });

  it("Should transfer ownership of a product", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", addr1.address, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    await supplyChain.newOwner(0, 1, 0);
    const [, , , , productOwner, ] = await supplyChain.getProduct(0);

    expect(productOwner).to.equal(addr1.address);
  });

  it("Should retrieve product track (ownership history)", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", addr1.address, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    await supplyChain.newOwner(0, 1, 0);
    const productTrack = await supplyChain.getProvenance(0);

    expect(productTrack.length).to.equal(1);
  });

  it("Should retrieve ownership details", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", addr1.address, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    await supplyChain.newOwner(0, 1, 0);
    const [productId, ownerId, , ] = await supplyChain.getOwnership(0);

    expect(productId.toNumber()).to.equal(0);
    expect(ownerId.toNumber()).to.equal(1);
  });

  it("Should authenticate a participant", async function () {
    await supplyChain.addParticipant("Alice", "password", addr1.address, "Manufacturer");
    const isAuthenticated = await supplyChain.authenticateParticipant(0, "Alice", "password", "Manufacturer");

    expect(isAuthenticated).to.equal(true);
  });

  it("Should fail to authenticate a participant with incorrect credentials", async function () {
    await supplyChain.addParticipant("Alice", "password", addr1.address, "Manufacturer");
    const isAuthenticated = await supplyChain.authenticateParticipant(0, "Alice", "wrong-password", "Manufacturer");

    expect(isAuthenticated).to.equal(false);
  });

  // Additional test for negative scenario
  it("Should not allow unauthorized participant type to add a product", async function () {
    await supplyChain.addParticipant("Supplier", "password", addr1.address, "Supplier");
    await expect(supplyChain.addProduct(0, "ModelX", "PartY", "SerialZ", 200)).to.be.revertedWith("Only a Manufacturer can add a product");
  });

  // Additional test for ownership transfer to ineligible participant type
  it("Should not allow transfer of ownership to unauthorized participant type", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addParticipant("Consumer", "password", addr2.address, "Consumer");
    await supplyChain.addProduct(0, "ModelX", "PartY", "SerialZ", 200);
    // Attempting to transfer ownership from a Manufacturer to a Consumer, which should not be allowed as per business logic
    await expect(supplyChain.newOwner(0, 2, 0)).to.be.revertedWith("Invalid ownership transfer");
  });

  // Additional test to ensure ownership transfer changes the product owner
  it("Ownership transfer should change product owner", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", owner.address, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", addr1.address, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    // Transferring ownership of the product to a new owner (Supplier)
    await supplyChain.newOwner(0, 1, 0);
    const [, , , , newProductOwner, ] = await supplyChain.getProduct(0);

    // The product owner should now be the Supplier's address
    expect(newProductOwner).to.equal(addr1.address);
  });
});

