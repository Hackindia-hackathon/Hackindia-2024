import { useState, useEffect } from 'react';
import './App.css';
import { useQuery } from '@airstack/airstack-react'; // Only import what you need
import MyComponent from './components/AirStackInt';
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import HomePage from './pages/Homepage';
import { Route, Routes } from "react-router-dom";
import MarketPlace from '../src/pages/Marketplace/Marketplace';

function App() {
  const [count, setCount] = useState(0);
  
  const pushProtocolNotification = async () => {
    const privateKey = 'fbd5eb49fd8ab7c2fcd018be5e94ce6d87d3936fdd2190fba94a0d0a0ed24712';
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.address;
    const userAlice = await PushAPI.initialize(signer, { env: 'staging' });
    const apiResponse = await userAlice.channel.send(['*'], { 
      notification: {
        title: 'Hello World Notification',
        body: 'Web3 native notifications are here!',
      }
    });
    console.log(apiResponse);
  };

  // Uncomment and use if needed
  // useEffect(() => {
  //   pushProtocolNotification();
  // }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/marketplace' element={<MarketPlace />} />
      </Routes>
    </>
  );
}

export default App;
