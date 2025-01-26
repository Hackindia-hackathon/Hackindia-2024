pragma solidity ^0.8.0;

contract StockPredictor {
    address private owner;
    uint public stockPrice;
    uint public prediction;

    constructor() public {
        owner = msg.sender;
    }

    function setStockPrice(uint _stockPrice) public {
        require(msg.sender == owner, "Only the owner can set the stock price");
        stockPrice = _stockPrice;
    }

    function predict() public {
        // Simple moving average strategy
        uint shortTermAverage = (stockPrice + stockPrice + stockPrice) / 3;
        uint longTermAverage = (stockPrice + stockPrice + stockPrice + stockPrice + stockPrice) / 5;

        if (shortTermAverage > longTermAverage) {
            prediction = 1; // Buy signal
        } else {
            prediction = 0; // Sell signal
        }
    }

    function getPrediction() public view returns (uint) {
        return prediction;
    }
}