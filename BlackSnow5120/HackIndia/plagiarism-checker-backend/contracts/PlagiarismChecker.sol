// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PlagiarismChecker {
    mapping(string => bool) private documentHashes;
    event CheckResult(bool isPlagiarized, string documentHash);

    function checkPlagiarism(string memory documentHash) public {
        bool isPlagiarized = documentHashes[documentHash];

        emit CheckResult(isPlagiarized, documentHash);

        if (!isPlagiarized) {
            documentHashes[documentHash] = true;
        }
    }
}
