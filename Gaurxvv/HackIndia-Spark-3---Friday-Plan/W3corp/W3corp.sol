// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract W3CorpChatbot {
    struct Message {
        address sender;
        string content;
        uint timestamp;
    }

    // Array to store messages
    Message[] public messages;

    // Event to signal a new message
    event NewMessage(address indexed sender, string content, uint timestamp);

    // Function to send a message to the chatbot
    function sendMessage(string memory _content) public {
        // Create a new message
        Message memory newMessage = Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        });

        // Store the message in the array
        messages.push(newMessage);

        // Emit the event
        emit NewMessage(msg.sender, _content, block.timestamp);
    }

    // Function to retrieve a message by index
    function getMessage(uint index) public view returns (address, string memory, uint) {
        require(index < messages.length, "Message index out of bounds");
        Message memory m = messages[index];
        return (m.sender, m.content, m.timestamp);
    }

    // Function to get the total number of messages
    function getMessagesCount() public view returns (uint) {
        return messages.length;
    }

    // Function to get all messages sent to the chatbot
    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }
}

