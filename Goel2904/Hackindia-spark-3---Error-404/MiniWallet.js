require('dotenv').config();

const web3 = require('web3');
const apikey =process.env['apikey']
const network = 'goerli';

const node = 'https://eth.getblock.io/${apikey}/${network}/'
const web3 = new web3(node)

//console.log(web3)

const accountTo = web3.eth.accounts.create();
//console.log(accountTo);
//console.log(accountTo.address);
const privatekey = process.evn['privatekey'];
const accountfrom = web3.eth.accounts.privatekeyToAccount(privatekey);
//console.log(accountfrom)

const createsigneedTx = async(rawTx)=>{
    rawTx.gas = awaitweb3.eth.estimategas(rawTx);
    return await accountfrom.signTransaction(rawTx);
}

const sendsignedTx = async(signedTx)=>{
    web3.eth.sendsignedTransaction(signedTx.rawTransaction).then(console.log)
}

const amountTo="0.01"
const rawTx = {
    to:accountTo.address,
    value:web3.utils.towei(amountTo,"ether")
}
createsigneedTx(rawTx).then(sendsignedTx)