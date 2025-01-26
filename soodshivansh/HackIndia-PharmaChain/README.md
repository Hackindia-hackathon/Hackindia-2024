# PharmaChain

A Web3-based decentralized application (DApp) designed for companies involved in medicine manufacture and supply. This project ensures transparency and accountability in the medicine supply chain by leveraging Ethereum smart contracts. It includes features such as medicine registration, QR code generation, and transaction logs to track the movement and status of medicines.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Smart Contract Functionality](#smart-contract-functionality)
4. [Setup Instructions](#setup-instructions)
5. [Running the Project](#running-the-project)

---

## Features

- **Medicine Registration**: Manufacturers can register medicines by providing details such as batch number, name, manufacturer, and expiry date.
- **QR Code Generation**: Generates a unique QR code for each registered medicine, storing critical details such as batch number and expiry date.
- **Medicine Tracking**: Log and view transactions related to the medicine supply chain.
- **Decentralized Ledger**: All actions are stored on the blockchain to ensure transparency and reduce drug misuse.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Shadcn Components
- **Backend**: Node.js
- **Smart Contracts**: Solidity (Ethereum)
- **Blockchain**: Ethereum
- **Web3 Integration**: Web3.js
- **QR Code Generation**: External API (https://api.qrserver.com)
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **Development Tools**: Hardhat, MetaMask, Ganache (for local Ethereum network)

## Smart Contract Functionality

- **Register Medicine**: Smart contract function to register new medicines on the blockchain.
- **Track Medicine**: Track the transaction and status of medicines across the supply chain.
- **QR Code Storage**: Store a QR code image link associated with each registered medicine.

## Setup Instructions

### Prerequisites

Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [MetaMask](https://metamask.io/) (for Ethereum wallet integration)
- [Ganache](https://trufflesuite.com/ganache/) (for local blockchain development)
- [Hardhat](https://hardhat.org/) (for smart contract deployment and testing)


