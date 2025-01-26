import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const App = () => {
  const [account, setAccount] = useState('');
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await window.web3.eth.getAccounts();
        setAccount(accounts[0]);
      }
    };
    loadWeb3();
  }, []);

  const authenticate = async () => {
    const isAuthenticated = await contract.methods.authenticateUser(account).call();
    setAuthStatus(isAuthenticated);
  };

  return (
    <div>
      <h1>TokenizeHub Authentication</h1>
      <button onClick={authenticate}>Authenticate</button>
      {authStatus ? <p>Authenticated</p> : <p>Not Authenticated</p>}
    </div>
  );
};

export default App;