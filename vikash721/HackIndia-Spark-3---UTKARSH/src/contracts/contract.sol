// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Poll {
        string title;
        string[] options;
        mapping(uint => uint) votes; // Mapping from option index to votes count
        uint totalOptions;
        bool isActive;
    }

    mapping(uint => Poll) public polls; // Mapping from poll ID to Poll
    uint public nextPollId; // ID for the next poll to be created

    event PollCreated(uint pollId, string title);
    event OptionAdded(uint pollId, string option);
    event Voted(uint pollId, uint optionIndex);

    function createPoll(string memory _title, string[] memory _options) public {
        require(_options.length > 0, "At least one option is required");

        Poll storage newPoll = polls[nextPollId];
        newPoll.title = _title;
        newPoll.totalOptions = _options.length;
        newPoll.isActive = true;

        for (uint i = 0; i < _options.length; i++) {
            newPoll.options.push(_options[i]);
        }

        emit PollCreated(nextPollId, _title);
        nextPollId++;
    }

    function addOption(uint _pollId, string memory _option) public {
        Poll storage poll = polls[_pollId];
        require(poll.isActive, "Poll is not active");
        
        poll.options.push(_option);
        poll.totalOptions++;
        
        emit OptionAdded(_pollId, _option);
    }

    function vote(uint _pollId, uint _optionIndex) public {
        Poll storage poll = polls[_pollId];
        require(poll.isActive, "Poll is not active");
        require(_optionIndex < poll.totalOptions, "Invalid option index");
        
        poll.votes[_optionIndex]++;
        
        emit Voted(_pollId, _optionIndex);
    }

    function getPoll(uint _pollId) public view returns (string memory title, string[] memory options, uint[] memory votes) {
        Poll storage poll = polls[_pollId];
        require(poll.isActive, "Poll is not active");

        title = poll.title;
        options = poll.options;
        votes = new uint[](poll.totalOptions);

        for (uint i = 0; i < poll.totalOptions; i++) {
            votes[i] = poll.votes[i];
        }
    }

    function closePoll(uint _pollId) public {
        Poll storage poll = polls[_pollId];
        require(poll.isActive, "Poll is already closed");
        
        poll.isActive = false;
    }
}
