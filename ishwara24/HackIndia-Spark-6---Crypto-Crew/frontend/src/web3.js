import Web3 from 'web3';

// Initialize web3 instance and connect to Ganache
const getWeb3 = async () => {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable(); // Request account access
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            } else if (window.web3) {
                // Legacy dApp browsers
                resolve(window.web3);
            } else {
                reject("Please install MetaMask!");
            }
        });
    });
};

export default getWeb3;
