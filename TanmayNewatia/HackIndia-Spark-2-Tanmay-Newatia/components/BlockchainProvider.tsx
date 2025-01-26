'use client'

import { createWallet, inAppWallet, walletConnect } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { baseSepolia } from "thirdweb/chains";

// wallets used in your app
const wallets = [
  inAppWallet({
    smartAccount: {
      chain: baseSepolia,
      sponsorGas: false,
    },
    hidePrivateKeyExport: true,
    metadata: {
      image: {
        src: "/icon.png",
        alt: "Runic Realm",
        width: 100,
        height: 100,
      },
    },
    auth: {
      options: ["email", "google", "phone"],
    },
  }),
  walletConnect(),
  // createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export default function ConnectButtonWrapper() {
  return (
    <ConnectButton
      client={client}
      chain={baseSepolia}
      // timeout={10000}
      wallets={wallets}
      appMetadata={{
        name: "Runic Realm",
        url: "https://runic-realm.vercel.app/",
        logoUrl: "/icon.png"
      }}
    />
  );
}
