// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Whistleblower {
    struct WhistleblowerReport {
        string report;
        address whistleblower;
    }

    WhistleblowerReport[] public whistleblowerReports;

    event WhistleblowerReportSubmitted(address indexed whistleblower, string report);

    // Submit a whistleblower report
    function submitWhistleblowerReport(string memory _report) public {
        whistleblowerReports.push(WhistleblowerReport({
            report: _report,
            whistleblower: msg.sender
        }));
        emit WhistleblowerReportSubmitted(msg.sender, _report);
    }

    // Get all whistleblower reports
    function getAllWhistleblowerReports() public view returns (WhistleblowerReport[] memory) {
        return whistleblowerReports;
    }
}
