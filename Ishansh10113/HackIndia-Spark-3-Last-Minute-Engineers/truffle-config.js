module.exports = {
  networks: {
    zkEVM: {
      provider: () => new Web3.providers.HttpProvider('https://polygon-zkevm.alchemyapi.io/v2/EBAqPMU5WFgL7TIk4QBr6xX9qWzsireT'),
      network_id: 1101, // zkEVM network ID
      gas: 2000000,
      gasPrice: 20000000000,
    },
  },
};