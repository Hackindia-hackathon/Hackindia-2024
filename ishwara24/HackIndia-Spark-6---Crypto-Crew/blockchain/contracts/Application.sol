// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Application {
    struct ApplicationData {
        string name;
        string course;
        address applicant;
    }

    ApplicationData[] public applications;

    event ApplicationSubmitted(address indexed applicant, string name, string course);

    // Submit an application
    function submitApplication(string memory _name, string memory _course) public {
        applications.push(ApplicationData({
            name: _name,
            course: _course,
            applicant: msg.sender
        }));
        emit ApplicationSubmitted(msg.sender, _name, _course);
    }

    // Get all applications
    function getAllApplications() public view returns (ApplicationData[] memory) {
        return applications;
    }
}
