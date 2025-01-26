import React, { useState } from 'react';
import { ethers } from 'ethers';
import styles from './WalletConnection.module.css';

const WalletConnection = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    setLoading(true);
    setError(null);
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAccount = await signer.getAddress();
        setAccount(userAccount);
      } catch (error) {
        console.error("Error connecting to wallet", error);
        setError("Failed to connect to wallet. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please install MetaMask!");
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return (
    <div className={styles.container}>
      {loading && <div className={styles.loading}>Connecting...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {account ? (
        <div className={styles.connected}>
          Connected: {account}
          <button className={styles.disconnectButton} onClick={disconnectWallet}>
            Disconnect
          </button>
        </div>
      ) : (
        <button className={styles.connectButton} onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnection;
