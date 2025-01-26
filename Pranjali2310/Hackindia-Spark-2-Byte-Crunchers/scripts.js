document.addEventListener('DOMContentLoaded', async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();
        document.getElementById('account').innerText = accounts[0];

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ArtMarketplace.networks[networkId];
        const artMarketplace = new web3.eth.Contract(
            ArtMarketplace.abi,
            deployedNetwork && deployedNetwork.address,
        );

        const mintButton = document.getElementById('mintButton');
        mintButton.onclick = async () => {
            const tokenURI = document.getElementById('tokenURI').value;
            if (tokenURI.trim() === "") {
                alert('Token URI cannot be empty!');
                return;
            }
            try {
                await artMarketplace.methods.mintArt(accounts[0], tokenURI).send({ from: accounts[0] });
                alert('Token minted successfully!');
            } catch (error) {
                alert('Error minting token: ' + error.message);
            }
        };
    } else {
        alert('Please install MetaMask!');
    }
});