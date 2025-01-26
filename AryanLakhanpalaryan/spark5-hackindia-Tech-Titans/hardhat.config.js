

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#", PRIVATE_KEY="0xE08a95D50940a0EFEcfEBa140653D5C75293d921"} = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 210000000,
         gasPrice: 800000000000,
      }
   },
}