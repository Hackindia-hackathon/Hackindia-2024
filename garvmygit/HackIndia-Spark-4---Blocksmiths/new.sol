// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenizeHub {
    mapping(address => uint) public tokens;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function issueTokens(address user, uint amount) public onlyOwner {
        tokens[user] += amount;
    }

    function getTokenBalance(address user) public view returns (uint) {
        return tokens[user];
    }

    function authenticateUser(address user) public view returns (bool) {
        return tokens[user] > 0;
    }
}