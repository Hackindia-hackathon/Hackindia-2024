const CoinbaseCommerce = require('coinbase-commerce-node');
const Client = CoinbaseCommerce.Client;
const Charge = CoinbaseCommerce.resources.Charge;

// Initialize Coinbase Commerce client with your API key
Client.init('c4f38c9c2-45c4-4d47-ba28-d15af812b5ea');

async function createCharge() {
  const chargeData = {
    name: 'Test Charge',
    description: 'Testing Coinbase Commerce integration',
    local_price: {
      amount: '10.00',
      currency: 'USD'
    },
    pricing_type: 'fixed_price'
  };

  try {
    const charge = await Charge.create(chargeData);
    console.log(charge);
    return charge;
  } catch (error) {
    console.error('Error creating charge:', error);
  }
}

module.exports = {
  createCharge
};
