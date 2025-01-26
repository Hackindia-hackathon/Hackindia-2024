"use client";
import HeaderSection from "@/components/HeaderSection";
import { Hero } from "@/components/Hero";
import { Upload } from "@/components/Upload";
import { UploadImage } from "@/components/UploadImage";
import Image from "next/image";
import { useState } from "react";

import WalletContextProvider from "@/components/WalletContextProvider";

export default function Home() {

  return (
    <WalletContextProvider>
      <HeaderSection/>
      <Hero />
      <Upload />
    </WalletContextProvider>
  );
}
