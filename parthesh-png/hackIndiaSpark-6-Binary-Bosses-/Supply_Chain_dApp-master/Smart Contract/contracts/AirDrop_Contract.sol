// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./erc20Token_Contract.sol";
import "@openzeppelin/contracts/access/Ownable.sol";  // Importing OpenZeppelin's Ownable contract for access control

contract SupCoinAirdrop is Ownable {
    SupCoin public token;

    constructor(address _tokenAddress) {
        token = SupCoin(_tokenAddress);  // Initialize the token contract instance
    }

    /**
     * @dev Function to distribute tokens to multiple recipients. Only the owner can execute this function.
     * @param recipients The array of recipient addresses.
     * @param amount The amount of tokens to be transferred to each recipient.
     */
    function airdropTokens(address[] memory recipients, uint256 amount) public onlyOwner {
        require(token.allowance(msg.sender, address(this)) >= recipients.length * amount, "Not enough tokens allowed for airdrop");
        for (uint256 i = 0; i < recipients.length; i++) {
            // Using require to ensure each transfer is successful. If a transfer fails, the entire transaction is reverted.
            require(token.transferFrom(msg.sender, recipients[i], amount), "Token transfer failed");
        }
    }
}
