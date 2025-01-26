// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageContract {
    struct StorageDeal {
        address provider;
        address user;
        string fileHash;
        uint256 timestamp;
        bool completed;
    }

    StorageDeal[] public storageDeals;

    function createStorageDeal(string memory fileHash) public {
        StorageDeal memory newDeal = StorageDeal({
            provider: msg.sender,
            user: address(0),
            fileHash: fileHash,
            timestamp: block.timestamp,
            completed: false
        });
        storageDeals.push(newDeal);
    }

    function completeStorageDeal(uint256 dealId, address user) public {
        require(msg.sender == storageDeals[dealId].provider, "Only provider can complete the deal");
        storageDeals[dealId].user = user;
        storageDeals[dealId].completed = true;
    }

    function getStorageDeal(uint256 dealId) public view returns (StorageDeal memory) {
        return storageDeals[dealId];
    }
}
