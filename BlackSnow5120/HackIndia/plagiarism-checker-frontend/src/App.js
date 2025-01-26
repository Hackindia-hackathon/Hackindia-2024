import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import PlagiarismChecker from './contracts/PlagiarismChecker.json';
import CryptoJS from 'crypto-js';

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [documentHash, setDocumentHash] = useState('');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PlagiarismChecker.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        PlagiarismChecker.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setContract(contractInstance);
    };

    init();
  }, []);

  const checkPlagiarism = async (hash) => {
    if (contract && hash) {
      try {
        const response = await contract.methods.checkPlagiarism(hash).send({ from: account });
        const event = response.events.CheckResult.returnValues;
        setResult(event[0] ? 'Plagiarism Detected' : 'No Plagiarism');
      } catch (error) {
        console.error('Error checking plagiarism:', error);
      }
    }
  };

  const generateHash = async () => {
    if (inputText) {
      const hash = CryptoJS.SHA256(inputText).toString();
      setDocumentHash(hash);
      alert(`Generated Hash: ${hash}`); // Show the generated hash in an alert
      await checkPlagiarism(hash); // Automatically check for plagiarism with the generated hash
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Decentralized Plagiarism Checker</h1>
      <p>Connected Account: {account}</p>

      <h2>Word to Hash Converter</h2>
      <input
        type="text"
        placeholder="Enter text to hash"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <button onClick={generateHash} style={{ padding: '10px 20px' }}>
        Generate Hash
      </button>

      <h2>Check Plagiarism</h2>
      <input
        type="text"
        placeholder="Document Hash"
        value={documentHash}
        readOnly
        style={{ margin: '10px', padding: '10px' }}
      />
      <h2>{result}</h2>
    </div>
  );
}

export default App;
