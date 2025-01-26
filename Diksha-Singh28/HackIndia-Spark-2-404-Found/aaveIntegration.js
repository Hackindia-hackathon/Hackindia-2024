import { ethers } from 'ethers';
import { AaveProtocolDataProvider } from '@aave/protocol-js';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const dataProviderAddress = 'YOUR_DATA_PROVIDER_ADDRESS';
const dataProvider = new AaveProtocolDataProvider(provider, dataProviderAddress);

async function getUserData() {
  const userAccountData = await dataProvider.getUserAccountData('YOUR_WALLET_ADDRESS');
  console.log(userAccountData);
}

getUserData();