import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const App = () => {
  const [stockPrice, setStockPrice] = useState(0);
  const [prediction, setPrediction] = useState(0);

  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));
    const contract = new web3.eth.Contract(StockPredictor.abi, '0x...ContractAddress...');

    contract.methods.getStockPrice().call().then((price) => {
      setStockPrice(price);
    });

    contract.methods.getPrediction().call().then((prediction) => {
      setPrediction(prediction);
    });
  }, []);

  const handleCheckStockPrice = () => {
    window.open(`https://www.tradingview.com/chart/?symbol=${stockPrice}`, '_blank');
  };

  return (
    <div>
      <h1>Live Market Statute</h1>
      <p>Stock Price: {stockPrice}</p>
      <p>Prediction: {prediction === 1 ? 'Buy' : 'Sell'}</p>
      <button onClick={handleCheckStockPrice}>Check Stock Price on TradingView</button>
    </div>
  );
};

export default App;