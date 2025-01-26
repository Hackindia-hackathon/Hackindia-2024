import {createContext, useCallback, useContext, useEffect, useState} from "react";
import { ethers } from "ethers";

// UseWalletContext
export const WalletContext = createContext({
    account: null,
    provider: null,
    error: null,
    connectWallet: () => {},
    disconnectWallet: () => {}
});

// WalletProvider
export const WalletProvider = ({ children }) => {

    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [error, setError] = useState(null);

    // Connect to the wallet
    const connectWallet = useCallback(async () => {
        try {
            if (window.ethereum) {
                const ethProvider = new ethers.BrowserProvider(window.ethereum);
                // Request access to the user's wallet
                await window.ethereum.request({method: "eth_requestAccounts"});

                setProvider(ethProvider);
                const accounts = await ethProvider.listAccounts();

                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setError("No accounts found.");
                    console.log("No accounts found.");
                }
            } else {
                setError("Metamask is not installed.");
                console.log("Metamask is not installed.");
            }
        } catch (e) {
            setError(e.message);
            console.error(e);
        }
    }, []);

    // Disconnect from the wallet
    const disconnectWallet = useCallback(async () => {
        setAccount(null);
        setProvider(null);
    }, []);

    // Handle account changes
    useEffect(() => {
        const handleAccountsChanged = (accounts) => {
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            } else {
                disconnectWallet();
            }
        };

        if (window.ethereum) {
            window.ethereum.on("accountsChanged", handleAccountsChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
            }
        };
    }, [disconnectWallet]);

    return (
        <WalletContext.Provider value={{ account, provider, connectWallet, disconnectWallet, error }}>
            {children}
        </WalletContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useWalletContext() {
    return useContext(WalletContext);
}