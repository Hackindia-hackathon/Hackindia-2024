const { createContext, useContext, useEffect, useState, useMemo } = require("react");
import { loadContract } from "@utils/loadContract";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";

const Web3Context = createContext(null);

const setListeners = (provider) => {
  provider.on("chainChanged", (_) => window.location.reload());
};

const createWeb3State = ({ web3, provider, contract, isLoading }) => {
  return {
    web3,
    provider,
    contract,
    isLoading,
    hooks: setupHooks({ web3, provider, contract }),
  };
};

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState(
    createWeb3State({
      web3: null,
      provider: null,
      contract: null,
      isLoading: true,
    })
  );

  useEffect(() => {
    const loadProvider = async () => {
      let provider;

      // Attempt to use MetaMask provider if available
      if (window.ethereum) {
        provider = window.ethereum;
        try {
          await provider.request({ method: "eth_requestAccounts" });
        } catch (error) {
          console.error("User denied MetaMask account access");
        }
      } else {
        // Default to local Ganache instance if no MetaMask detected
        provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
        console.log("Using local Ganache provider");
      }

      const web3 = new Web3(provider);
      const contract = await loadContract("CourseMarketplace", web3);

      console.log("Contract loaded", contract);

      if (provider.on) {
        setListeners(provider);
      }

      setWeb3Api(
        createWeb3State({
          web3,
          provider,
          contract,
          isLoading: false,
        })
      );
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              if (provider.request) {
                await provider.request({ method: "eth_requestAccounts" });
              }
            } catch {
              window.location.reload();
            }
          }
        : () => console.error("No Ethereum provider detected."),
    };
  }, [web3Api]);

  return <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(cb) {
  const { hooks } = useWeb3();
  return cb(hooks);
}
