// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    // Constructor: Pass msg.sender to Ownable
    constructor() ERC721("MyNFT", "NFT") Ownable(msg.sender) {}

    // Function to mint an NFT to a recipient with a specific tokenURI
    function mintNFT(address recipient, string memory tokenURI) 
        public 
        onlyOwner 
        returns (uint256)
    {
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        // Mint the new NFT
        _mint(recipient, newItemId);
        
        // Set the tokenURI for the minted NFT
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
