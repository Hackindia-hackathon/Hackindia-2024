// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "./SharpToken.sol";
import "./Whistleblower.sol";
import "./Application.sol";

contract TransparentAdmissions is Whistleblower, Application {
    SharpToken public sharpToken;
    address public admin;

    event SharpTokensRewarded(address indexed recipient, uint256 amount);

    constructor(address _sharpTokenAddress) {
        sharpToken = SharpToken(_sharpTokenAddress);
        admin = msg.sender; // Admin is the contract deployer
    }

    // Modifier to restrict actions to the admin only
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Reward Sharp Tokens to whistleblowers
    function rewardSharpTokens(address _recipient, uint256 _amount) public onlyAdmin {
        sharpToken.mint(_recipient, _amount);
        emit SharpTokensRewarded(_recipient, _amount);
    }
}
