import Web3 from 'web3';

function Mint() {
  const handleMint = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();

      const contract = new web3.eth.Contract(/* ABI */',' /* Contract Address */);
      await contract.methods.mint(/* Parameters */).send({ from: accounts[0] });
    } else {
      alert('MetaMask not detected');
    }
  };

  return (
    <div>
      <h2>Mint Your NFT</h2>
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
}

export default Mint;
