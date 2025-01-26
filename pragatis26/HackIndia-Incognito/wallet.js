const getProvider = () => {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
    }

    window.open('https://phantom.app/', '_blank');
};

const connectWallet = async () => {
    const provider = getProvider();
    try {
        await provider.connect();
    } catch (err) {
        console.error(err);
    }
}

const requestWalletConnection = async () => {
    const provider = getProvider();
    try {
        await provider.request({ method: "connect" });
    } catch (err) {
        console.error(err);
    }
}

const getWalletAddress = () => {
    const provider = getProvider();
    try {
        return provider?.publicKey?.toBase58();
    } catch (err) {
        return '';
    }
}
