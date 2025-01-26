// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BulbController {
    // Boolean variable to store the bulb's status
    bool public isOn;

    // Event to notify when the bulb's status changes
    event BulbStatusChanged(bool status);

    // Constructor to initialize the bulb to an off state
    constructor() {
        isOn = false;
    }

    // Function to turn the bulb on
    function turnOn() public {
        require(!isOn, "The bulb is already on");
        isOn = true;
        emit BulbStatusChanged(isOn);
    }

    // Function to turn the bulb off
    function turnOff() public {
        require(isOn, "The bulb is already off");
        isOn = false;
        emit BulbStatusChanged(isOn);
    }

    // Function to toggle the bulb status
    function toggle() public {
        isOn = !isOn;
        emit BulbStatusChanged(isOn);
    }

    // Function to get the current status of the bulb
    function getStatus() public view returns (bool) {
        return isOn;
    }
}
