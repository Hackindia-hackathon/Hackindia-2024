// contracts/Lottery.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether, "Minimum ether required is 0.01");
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp, players)));
    }

    function pickWinner() public restricted {
        require(players.length > 0, "No players to pick from");
        uint index = random() % players.length;
        address winner = players[index];
        payable(winner).transfer(address(this).balance);
        delete players; 
    }

    modifier restricted() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
