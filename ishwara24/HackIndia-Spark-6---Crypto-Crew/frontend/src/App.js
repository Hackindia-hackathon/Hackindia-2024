import React, { useEffect, useState } from 'react';
import getWeb3 from './web3';
import { initBlockchain } from './contractInteraction';
import ApplicationForm from './components/ApplicationForm';
import WhistleblowerForm from './components/WhistleblowerForm';
import Dashboard from './components/Dashboard';
import SubmitApplication from './components/SubmitApplication';

function App() {
  
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await getWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        setWeb3(web3Instance);
        setAccount(accounts[0]);

        // Initialize smart contracts
        await initBlockchain(web3Instance, accounts);
      } catch (error) {
        console.error("Error initializing blockchain:", error);
      }
    };

    init();
  }, []);

  return (
    <div>

      <h1>Transparent Admissions
      className="App"</h1>
      <ApplicationForm account={account} />
      <WhistleblowerForm account={account} />
      <Dashboard account={account} />
      <SubmitApplication />
    </div>
  
  );
  
}

export default App;
