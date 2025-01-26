const SharpToken = artifacts.require("SharpToken");
const TransparentAdmissions = artifacts.require("TransparentAdmissions");
const Whistleblower = artifacts.require("Whistleblower");

module.exports = async function (deployer) {
    // Deploy SharpToken
    await deployer.deploy(SharpToken);
    const sharpToken = await SharpToken.deployed();

    // Deploy TransparentAdmissions and pass the SharpToken address
    await deployer.deploy(TransparentAdmissions, sharpToken.address);
    const transparentAdmissions = await TransparentAdmissions.deployed();

    // Deploy Whistleblower contract and pass the SharpToken address
    await deployer.deploy(Whistleblower, sharpToken.address);
    const whistleblower = await Whistleblower.deployed();

    console.log("Contracts deployed:");
    console.log("SharpToken Address:", sharpToken.address);
    console.log("TransparentAdmissions Address:", transparentAdmissions.address);
    console.log("Whistleblower Address:", whistleblower.address);
};
