const React = require('react');
const { useState, useEffect } = require('react');
const web3 = require('./web3');
const contract = require('./contracts/DeFiBank');
const { createCharge } = require('./coinbase');

function App() {
  const [balance, setBalance] = useState('');
  const [amount, setAmount] = useState('');

  const loadBalance = async () => {
    const accounts = await web3.eth.getAccounts();
    const balance = await contract.methods.getBalance().call({ from: accounts[0] });
    setBalance(web3.utils.fromWei(balance, 'ether'));
  };

  const deposit = async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.deposit().send({
      from: accounts[0],
      value: web3.utils.toWei(amount, 'ether')
    });
    loadBalance();
  };

  const withdraw = async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.withdraw(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    loadBalance();
  };

  const handleCreateCharge = async () => {
    const charge = await createCharge();
    console.log('Charge created:', charge);
  };

  useEffect(() => {
    loadBalance();
  }, []);

  return (
    <div>
      <h1>DeFi Bank</h1>
      <p>Balance: {balance} ETH</p>
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
      <button onClick={handleCreateCharge}>Create Charge</button>
    </div>
  );
}

module.exports = App;
