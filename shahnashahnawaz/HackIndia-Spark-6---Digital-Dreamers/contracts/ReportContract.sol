// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReportContract {
    struct Report {
        string reportText;
        uint256 timestamp;
        address reporter;
    }

    Report[] public reports;

    event ReportFiled(
        string reportText,
        uint256 timestamp,
        address indexed reporter
    );

    function fileReport(string memory _reportText) public {
        reports.push(
            Report({
                reportText: _reportText,
                timestamp: block.timestamp, // Updated from 'now' to 'block.timestamp'
                reporter: msg.sender
            })
        );
        emit ReportFiled(_reportText, block.timestamp, msg.sender);
    }

    function getReport(
        uint256 _index
    ) public view returns (string memory, uint256, address) {
        require(_index < reports.length, "Index out of bounds"); // Added safety check
        Report memory report = reports[_index];
        return (report.reportText, report.timestamp, report.reporter);
    }

    function getReportsCount() public view returns (uint256) {
        return reports.length;
    }
}
