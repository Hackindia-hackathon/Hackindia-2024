// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandChain {
    struct Land {
        uint id;
        string owner;
        string location;
        uint size;
    }

    uint public landCount = 0;
    mapping(uint => Land) public lands;

    function addLand(string memory _owner, string memory _location, uint _size) public {
        landCount++;
        lands[landCount] = Land(landCount, _owner, _location, _size);
    }

    function getLand(uint _id) public view returns (string memory, string memory, uint) {
        Land memory l = lands[_id];
        return (l.owner, l.location, l.size);
    }
}
