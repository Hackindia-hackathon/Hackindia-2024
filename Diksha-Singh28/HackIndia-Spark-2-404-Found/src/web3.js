import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

export default web3;
