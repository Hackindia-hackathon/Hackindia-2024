// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SharpToken is ERC20, Ownable {
    constructor() ERC20("SharpToken", "SHARP") {
        // Mint initial supply to the contract owner (admin)
        _mint(msg.sender, 1000000 * 10 ** decimals()); // 1 Million Sharp Tokens
    }

    // Function to mint new tokens (only the owner can mint)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
