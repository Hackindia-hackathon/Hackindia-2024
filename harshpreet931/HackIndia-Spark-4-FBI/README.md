# 📚 FBI: Empowering Education for All

Welcome to our **Next.js** project, dedicated to bringing quality education to underprivileged communities. Built using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), this project harnesses the power of modern web development to drive social impact through accessible learning. 🌍

![How it works](/EduBridge.jpg)

## 🔑 Setting Up Your Environment

To get started, you'll need to configure the `keys.json` file in the root of the project. This allows us to connect with Infura for future blockchain-powered features:

```json
{
  "INFURA_PROJECT_ID": "#Your Infura Project ID",
  "MNEMONIC": "#Your Ganache Mnemonic"
}
```

##### 📦 Creating Infura Account

1. Visit Infura\.io - [https://infura.io/](https://infura.io/) and Create a Free Account.
2. Select as a Student and Sign Up.
3. You can also Sign up using Meta Mask
4. At Last You will be given an API Key 
5. Copy the API Key and Paste it in the `keys.json` file.

##### 📦 Creating MMEMONIC

1. Download Ganache GUI from [Ganche GUI Releases](https://github.com/trufflesuite/ganache-ui/releases)
2. Install the Ganache GUI
3. Create a New Workspace 
4. Click on Setting in the Top Right Corner
5. Change the Port to 8545
6. Save and Restart the Workspace
7. Copy the Mnemonic and Paste it in the `keys.json` file.

##### 📦 Setting up Truffle

1. Install Truffle using the following command
```bash
npm install -g truffle
```
2. Run the following command to compile the Solidity Contracts
```bash
truffle migrate --reset
```

3. It Should Compile the Contracts and Deploy them to the Ganache Network. If Any Error Occurs, Please Check the `truffle-config.js` file. It should not be changed. The Port there should be 8545.


##### 📦 Setting up Metamask

1. Install Metamask Extension in your Browser
2. Create a New Account
3. Click on the Network Dropdown and Select Custom RPC
4. Enter the URL as `http://127.0.0.1:8545`
5. Click on Save
6. You will be connected to the Ganache Network

###### Adding Test Blockchain

- Open Ganache GUI Workspace and Click on Very right Key Icon of any Chain
- Copy the Private Key
- Open Metamask and Click on the Profile Icon
- Click on Import Account
- Paste the Private Key
- Click on Import
- You will be connected to the Test Blockchain
- There should be 100 ETH in the Account

## 📦 Installing Dependencies

To install the necessary dependencies, run the following command:

```bash
npm install
```

## 🚀 Getting Started

Once everything is set up, follow these steps to launch the development server:

```bash
npm run dev
```

Head over to [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📺 Demo Video
[Watch our Short Demo Video](https://youtu.be/ZhMMMi6NMrg)
