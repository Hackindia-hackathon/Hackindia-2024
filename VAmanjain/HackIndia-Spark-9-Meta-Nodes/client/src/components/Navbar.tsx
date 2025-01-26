import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import detectEthereumProvider from "@metamask/detect-provider";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress } from "@/redux/slices/walletSlice";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState("");
  const dispatch = useDispatch();
  const walletAddress = useSelector((state: any) => state.wallet.address);
  const navigate = useNavigate();
  

  
  const connectWallet = async () => {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        dispatch(setWalletAddress(account));
        if (account) {
          navigate("/register");
        }
      } else {
        console.log("MetaMask is not installed. Please install it to use this app.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      navigate("/register",{replace:true});
    }
  }, [walletAddress, navigate]);


  return (
    <nav className="fixed top-4 rounded-full w-[90%] mx-auto left-0 right-0 z-50 bg-[rgba(10,10,35,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-4 border border-[rgba(255,255,255,0.18)] backdrop-blur-md border-b border-[#007BFF]/20 rounded-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Web3Certs</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 text-xl hover:text-yellow-300 rounded-full px-3 py-2 transition-all transform-[0.2s] ease-in-out text-sm font-medium">Home</a>
              <a href="#how-it-works" className="text-gray-300 text-xl hover:text-yellow-300 rounded-full px-3 py-2 transition-all transform-[0.2s] ease-in-out text-sm font-medium">About</a>
              <a href="#testimonials" className="text-gray-300 text-xl hover:text-yellow-300 rounded-full px-3 py-2 transition-all transform-[0.2s] ease-in-out text-sm font-medium">FAQ</a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-[#32FF7E] text-[#32FF7E] hover:bg-[#32FF7E] hover:text-black transition-all ease-in-out rounded-full"
              onClick={connectWallet}
            >
              <WalletIcon className="mr-2 h-4 w-4" /> 
              {account ? `Connected: ${account}` : "Connect Wallet"}
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <Button
              onClick={connectWallet}
              variant="outline"
              className="w-full mt-4 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
            >
              <WalletIcon className="mr-2 h-4 w-4" /> 
              {account ? `Connected: ${account}` : "Connect Wallet"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}