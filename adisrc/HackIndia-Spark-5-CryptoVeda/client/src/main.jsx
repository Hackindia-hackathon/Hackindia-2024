import React from "react";
import { createRoot } from "react-dom/client";
import { ChainId,ThirdwebProvider } from "@thirdweb-dev/react"; // Import from "thirdweb" instead of "@thirdweb-dev/react"
import { BrowserRouter as Router } from "react-router-dom";

import { StateContextProvider } from "./context";
import App from "./App";
import './index.css';
const root = createRoot(document.getElementById("root"));

import { EnergyWebVoltaTestnet } from "@thirdweb-dev/chains";

const activeChain=ChainId.Volta;
root.render(
  <ThirdwebProvider
      activeChain={EnergyWebVoltaTestnet}
       clientId="f0b3eb888f0e835660249e260a74d666"
    >

    <Router>
      <StateContextProvider>
        
      <App />
      </StateContextProvider>
      
    </Router>
  </ThirdwebProvider>
);
