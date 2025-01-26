"use client";

import HeaderSection from "@/components/HeaderSection";
import { Hero } from "@/components/Hero";
import { Upload } from "@/components/Upload";
import WalletContextProvider from "@/components/WalletContextProvider";
import App from "next/app";

export default function Home() {
  return (
    <div className="h-[100vh] bg-black text-white">
      {/* <App/> */}
      <WalletContextProvider>
        <HeaderSection />
        <Hero />
        <Upload />
      </WalletContextProvider>
    </div>
  );
}
