const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('(link unavailable)'));

const aiModelContract = new web3.eth.Contract(abi, address);

async function generateContent(prompt) {
    const tx = await aiModelContract.methods.generateContent(prompt).send({ from: '0x...' });
    console.log(tx);
    // Retrieve generated content from IPFS
    const cid = generatedContent[tx.from];
    const generatedText = await ipfs.get(cid);
    return generatedText;
}