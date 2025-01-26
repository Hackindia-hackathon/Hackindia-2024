import { expect } from "chai";
import { ethers } from "hardhat";

describe("Flux1NFT", function () {
  let Flux1NFT;
  let flux1NFT;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    Flux1NFT = await ethers.getContractFactory("Flux1NFT");
    [owner, addr1, addr2] = await ethers.getSigners();

    flux1NFT = await Flux1NFT.deploy();
    await flux1NFT.deployed();
  });

  it("Should deploy the contract and set the correct owner", async function () {
    expect(await flux1NFT.owner()).to.equal(owner.address);
  });

  it("Should allow the owner to mint a new NFT", async function () {
    await flux1NFT.mint(addr1.address);

    expect(await flux1NFT.balanceOf(addr1.address)).to.equal(1);
    expect(await flux1NFT.ownerOf(0)).to.equal(addr1.address);
  });

  it("Should increment the nextTokenId after each mint", async function () {
    await flux1NFT.mint(addr1.address);
    await flux1NFT.mint(addr2.address);

    expect(await flux1NFT.nextTokenId()).to.equal(2);
  });

  it("Should not allow non-owners to mint", async function () {
    await expect(flux1NFT.connect(addr1).mint(addr2.address)).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
