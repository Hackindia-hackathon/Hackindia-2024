// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthTracker {
    struct HealthRecord {
        string symptom;
        string medication;
        address patient;
    }

    HealthRecord[] public records;

    function addRecord(string memory symptom, string memory medication) public {
        records.push(HealthRecord(symptom, medication, msg.sender));
    }

    function getRecords() public view returns (HealthRecord[] memory) {
        return records;
    }
}