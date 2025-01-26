import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import './App.css';

const App = () => {
    const [account, setAccount] = useState('');
    const [healthData, setHealthData] = useState({ symptom: '', medication: '' });
    const [message, setMessage] = useState('');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
            } else {
                alert('Please install MetaMask to use this app.');
            }
        };
        loadWeb3();
    }, []);

    const handleChange = (e) => {
        setHealthData({ ...healthData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Store health data on the backend
        await axios.post('http://localhost:5000/api/health', { data: healthData, account });
        setMessage('Health data submitted successfully!');
        setHealthData({ symptom: '', medication: '' });
        fetchRecords();
    };

    const fetchRecords = async () => {
      const res = await axios.get(`http://localhost:5000/api/health/${account}`);
      setRecords(res.data);
  };

    return (
        <div className="App">
            <h1>Health Tracker</h1>
            <h2>Account: {account}</h2>
            <form onSubmit={handleSubmit}>
                <input name="symptom" value={healthData.symptom} onChange={handleChange} placeholder="Enter symptom" required />
                <input name="medication" value={healthData.medication} onChange={handleChange} placeholder="Enter medication" required />
                <button type="submit">Submit Health Data</button>
            </form>
            {message && <p>{message}</p>}
            <h3>Your Health Records</h3>
            <ul>
                {records.map((record, index) => (
                    <li key={index}>{record.symptom} - {record.medication}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;