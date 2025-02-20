import { providers } from 'ethers';

export const getProviderOrSigner = async (web3ModalRef, needSigner = false) => {
	const provider = await web3ModalRef.current.connect();
	const web3Provider = new providers.Web3Provider(provider);

	const { chainId } = await web3Provider.getNetwork();
	if (chainId != 199) {
		window.alert('Change the network ');
		throw new Error('Change the network');
	}
	if (needSigner) {
		const signer = web3Provider.getSigner();
		return signer;
	}
	return web3Provider;
};
