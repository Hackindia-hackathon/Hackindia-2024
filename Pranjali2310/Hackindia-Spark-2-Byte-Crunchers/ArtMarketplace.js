// migrations/2_deploy_contracts.js
const ArtMarketplace = artifacts.require("ArtMarketplace");

module.exports = function (deployer) {
  deployer.deploy(ArtMarketplace);
};