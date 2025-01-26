const Wallet = require('ethereumjs-wallet').default;  // Use .default to access the main export

// Generate a new wallet
const wallet = Wallet.generate();

// Get the private key and public address
const privateKey = wallet.getPrivateKeyString();  // Get the private key
const publicAddress = wallet.getAddressString();   // Get the public address

console.log('Private Key:', privateKey);
console.log('Public Address:', publicAddress);
