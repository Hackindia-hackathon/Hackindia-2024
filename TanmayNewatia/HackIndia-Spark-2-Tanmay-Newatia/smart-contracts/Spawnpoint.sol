// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Spawnpoint {
  struct CountHolder {
    uint256 count;
  }

  mapping(address => CountHolder) public counts;
  mapping(address => bool) public initialized;

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function initialize() public {
    require(!initialized[msg.sender], "Already Initialized");

    counts[msg.sender] = CountHolder({count: 3});
    initialized[msg.sender] = true;
  }

  function decrement() public {
    require(initialized[msg.sender], "Not initialized");
    CountHolder storage holder = counts[msg.sender];
    require(holder.count > 0, "Low balance");

    holder.count -= 1;
  }

  function topup(uint256 amount) public payable {
    require(initialized[msg.sender], "Not initialized");
    require(msg.value == amount * 5 * 10**13, "Incorrect Ether amount sent");

    CountHolder storage holder = counts[msg.sender];
    holder.count += amount;
  }

  function withdraw(uint256 amount) public {
    require(msg.sender == owner, "Only the contract owner can withdraw");
    require(address(this).balance >= amount, "Insufficient balance in contract");

    payable(owner).transfer(amount);
  }
}

// Amoy: 0xA028398885038d02D0bc6447A14Ca07aCC737c01
// Sepolia: 0xDdeFd148772c2c7b9902C1519EAF6928555B62b7
