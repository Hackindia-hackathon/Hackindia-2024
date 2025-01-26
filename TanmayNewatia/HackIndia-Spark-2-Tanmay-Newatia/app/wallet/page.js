'use client'

import { IoWallet } from "react-icons/io5";
import { useState, useEffect } from "react";
import useWindowDimensions from "@/components/hooks/getDimensions";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import { getAccount } from "@/components/datacollection/account";
import { Suspense } from "react";
import Loading from "@/components/loading";
import ConnectButtonWrapper from "@/components/BlockchainProvider";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { readContract, defineChain } from "thirdweb";
import { client, contract } from "@/components/client";

export default function WalletPage() {
    const { width, height } = useWindowDimensions();
    const activeAccount = useActiveAccount();
    const [transactionInProgress, setTransactionInProgress] = useState(false);
    const [counter, setCounter] = useState(0);
    const [token, setToken] = useState("0");
    const router = useRouter();
    const path = usePathname();
    const [refcode, setRefCode] = useState("");

    const { data, isLoading, isError } = useWalletBalance({
        chain: defineChain(84532),
        address: activeAccount?.address || "",
        client: client,
    });

    const getVal = async () => {
        try {
            if (data) {
                setToken(data.displayValue);
            }
            else {
                setToken("0");
            }
        }
        catch (e) {
            console.log(e);
            // initialize();
        }
    }

    useEffect(() => {
        if (!activeAccount) return;
        getVal();
        getAccount(activeAccount.address, "").then((data) => {
            if (data) {
                setRefCode(data.referral);
            }
        })
    }, [data, activeAccount])

    useEffect(() => {
        if (!activeAccount || transactionInProgress) return;
        const interval = setInterval(() => {
            fetch();
        }, 1000);
        return () => clearInterval(interval);
    }, [activeAccount?.address, transactionInProgress]);

    const fetch = async () => {
        if (!activeAccount) {
            setCounter(0);
            return
        };
        try {
            const counts = await readContract({
                contract,
                method: "function counts(address) view returns (uint256 count)",
                params: [activeAccount?.address || ""]
            });
            setCounter(Number(counts));
        }
        catch (e) {
            setCounter(0);
            console.log(e);
        }
    }
    const base = "https://www.spawnpoint.design";

    const links = base + "?referral=" + refcode;
    const copylink = (e) => {
        navigator.clipboard.writeText(links);
        toast.success('Link Copied!');
    }

    return (
        <Suspense fallback={<Loading />}>
            {(!activeAccount) ?
                <main className="flex flex-col gap-4 justify-center items-center h-screen w-screen">
                    <p className="text-white text-2xl w-10/12 text-center">Connect Wallet for the details!</p>
                    <div className="flex gap-8">
                        <Link href="/" className="text-white text-2xl p-2 rounded-xl text-center border-white border hover:text-[#CB2742] hover:border-[#CB2742]">Home</Link>
                        <ConnectButtonWrapper />
                    </div>
                </main>
                :
                <main className="w-screen min-h-screen flex justify-center items-center">
                    <div className="max-w-[500px] flex flex-col w-1/2 items-center gap-4">
                        <IoWallet className="text-8xl" />
                        <div className=" bg-[#CB2742] rounded-lg w-full p-2 flex items-center justify-center gap-4 text-2xl uppercase text-center">
                            <p>Your Wallet is activated</p>
                        </div>
                        <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-2xl text-center border border-white">
                            <p>Balance</p>
                            <div className="flex gap-2">
                                <p>{token.slice(0, 7)}<span className="font-semibold">ETH</span></p>
                            </div>
                        </div>
                        <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-2xl text-center border border-white">
                            <p>Chip Balance</p>
                            <div className="flex gap-2">
                                <p>{counter}</p>
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                            </div>
                        </div>
                        <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-2xl text-center border border-white">
                            <p>Referral Code</p>
                            <div className="flex gap-2">
                                <p>{refcode}</p>
                            </div>
                        </div>
                        <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-2xl text-center border border-white">
                            <p>Referral Link</p>
                            <div className="flex gap-2">
                                <p className="text-white cursor-pointer" onClick={() => { copylink() }}><FaCopy /></p>
                                {/* <img src="/game/chip.svg" alt="Chip" className="w-[25px]" /> */}
                            </div>
                        </div>
                        <div className="flex gap-8 items-center justify-center">
                            <Link href="/" className="text-white text-2xl p-2 rounded-xl text-center border-white border hover:text-[#CB2742] hover:border-[#CB2742]">Home</Link>
                            <ConnectButtonWrapper />
                        </div>
                    </div>
                    <Toaster />
                </main>}
        </Suspense>
    )
}