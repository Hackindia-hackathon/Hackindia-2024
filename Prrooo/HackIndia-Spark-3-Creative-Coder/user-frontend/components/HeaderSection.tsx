"use client";
import React from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { BACKEND_URL } from "@/utils";
import { useEffect } from "react";

const HeaderSection = () => {
  const { publicKey, signMessage } = useWallet();
  async function signAndSend() {
    if (!publicKey) {
      console.log("no public key");
      return;
    }
    const message = new TextEncoder().encode("Sign into mechanical turks");
    const signature = await signMessage?.(message);
    console.log(signature);
    console.log(publicKey);
    const response = await axios.post(
      `http://localhost:${BACKEND_URL}/api/user/signin`,
      {
        signature,
        publicKey: publicKey?.toString(),
      }
    );

    localStorage.setItem("token", response.data.token);
  }

  useEffect(() => {
        signAndSend()
    }, [publicKey]);

  return (
    <div className="flex justify-between border-b pb-2 pt-2 text-white">
      <div className="text-2xl pl-4 flex justify-center pt-3">QuestCoins</div>
      <div className="text-xl pr-4 py-2">
        {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
      </div>
    </div>
  );
};

export default HeaderSection;
