const MyNFT = artifacts.require("MyNFT");

contract("MyNFT", (accounts) => {
  let nftInstance;

  before(async () => {
    nftInstance = await MyNFT.deployed();
  });

  it("should deploy successfully", async () => {
    assert(nftInstance.address !== "");
  });

  it("should mint a new NFT and set the tokenURI", async () => {
    const tokenURI = "https://my-nft-metadata.com/1";
    const recipient = accounts[1]; // Use an account other than the owner

    const newTokenId = await nftInstance.mintNFT(recipient, tokenURI);

    // Verify that the token has been minted with correct tokenURI
    const uri = await nftInstance.tokenURI(newTokenId.logs[0].args[0].toNumber());
    assert.equal(uri, tokenURI, "TokenURI mismatch");

    // Verify ownership of the token
    const owner = await nftInstance.ownerOf(newTokenId.logs[0].args[0].toNumber());
    assert.equal(owner, recipient, "Token recipient mismatch");
  });
});
