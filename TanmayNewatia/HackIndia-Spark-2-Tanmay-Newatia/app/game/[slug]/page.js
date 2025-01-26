'use client'

import SearchBox from "@/components/home/searchbox";
import { FaUserPlus } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import allgames from "@/lib/allgames";
import useWindowDimensions from "@/components/hooks/getDimensions";
import { getLibrary, registerLibrary } from "@/components/datacollection/gamelibrary";
import gameid from "@/lib/gameid";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import Loader from "@/components/home/loader";
import { useActiveAccount } from "thirdweb/react";

export default function Gamepage() {
    const account = useActiveAccount();
    const { width, height } = useWindowDimensions();
    const path = usePathname();
    const slug = path.split("/")[2];
    const [librarystatus, setLibraryStatus] = useState("Add to Library");
    const [loading, setLoading] = useState(false);

    const checkLibrary = async () => {
        // console.log(wallet.connected);
        if (!account) {
            // toast.error('Connect your wallet first!');
            return;
        }
        const library = await getLibrary(slug, gameid[slug]["id"], account.address, 0);
        if (library) {
            (library["game_name"].indexOf(slug) !== -1) ?
                setLibraryStatus("In Library") : setLibraryStatus("Add to Library");
        }
        else {
            setLibraryStatus("Add to Library");
        }
        return library;
    }
    useEffect(() => {
        checkLibrary();
    }, [librarystatus, account]);

    const AddtoLibrary = async () => {
        // console.log(slug, gameid[slug]["id"], wallet["account"]["address"]);
        if (!account) {
            toast.error('Connect your wallet first!');
            return;
        }
        setLoading(true);
        const library = await getLibrary(slug, gameid[slug]["id"], account.address, 1);
        // const libSlug = [...library["game_name"], slug];
        // const libGame = [...library["game_id"], gameid[slug]["id"]];
        await registerLibrary(slug, gameid[slug]["id"], account.address);
        setTimeout(() => {
            setLoading(false);
            toast.success('Game added to library!');
        }, 2500);
        setLibraryStatus("In Library");
    }
    const base = "https://runic-realm.vercel.app";

    const links = base + path;
    const copylink = (e) => {
        navigator.clipboard.writeText(links);
        toast.success('Link Copied!');
    }
    return (
        < main className="my-[60px] md:my-[80px] w-screen min-h-screen bg-game-image flex flex-col bg-cover bg-no-repeat" >
            <SearchBox />
            <div className="w-10/12 mx-auto mt-8 flex max-[500px]:flex-col max-[500px]:items-center max-[500px]:justify-center">
                <div className="w-7/12 max-[500px]:w-10/12">
                    <div className="w-11/12 mx-auto">
                        {(slug == "aptos-arena") ?
                            <></> :
                            <div className="flex justify-end text-4xl font-bold">
                                {/* <div className="flex">
                                        <p>300</p>
                                        <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                    </div> */}

                                <div className="flex">
                                    <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                    <p>1/h</p>
                                </div>
                            </div>
                        }
                        <img src={`/game/${slug}/main.webp`} alt="Game" className="w-full" />
                    </div>
                    <div className="w-11/12 flex gap-4 mt-4 justify-evenly mx-auto flex-wrap">
                        <img src={`/game/${slug}/img1.webp`} alt="Game" className="w-[150px]" />
                        <img src={`/game/${slug}/img2.webp`} alt="Game" className="w-[150px]" />
                        <img src={`/game/${slug}/img3.webp`} alt="Game" className="w-[150px]" />
                        <img src={`/game/${slug}/img4.webp`} alt="Game" className="w-[150px]" />
                    </div>
                </div>
                <div className="w-4/12 mt-[40px] flex flex-col gap-4 max-[500px]:w-10/12">
                    <h1 className="text-5xl font-bold uppercase w-[200px] text-wrap">
                        <span>{allgames[slug]["name"]}</span>
                        {/* <br /> */}
                        {/* <span>Arena</span> */}
                    </h1>
                    <div onClick={() => { copylink(); }} className="cursor-pointer bg-[#454545] rounded-lg w-8/12 p-2 flex items-center gap-4">
                        <div className="text-black p-2 bg-white h-5/6 w-[50px] text-4xl flex justify-center items-center rounded-xl">
                            <FaUserPlus />
                        </div>
                        <h3 className="text-2xl font-semibold">
                            <span>Invite</span>
                            <br />
                            <span>Friends</span>
                        </h3>
                    </div>
                    <Link href={`/play/${slug}`}>
                        <div className="bg-[#CB2742] rounded-lg w-full p-2 flex items-center justify-center gap-4 text-2xl uppercase text-center">
                            <p>Play Session</p>
                        </div>
                    </Link>
                    <div onClick={() => { (librarystatus == "Add to Library") ? AddtoLibrary() : toast.success("Game already in Library!"); }} className="cursor-pointer bg-[#F08D19] rounded-lg w-full p-2 flex items-center justify-center gap-4 text-2xl uppercase text-center">
                        {(loading) ? <Loader /> : <p>{librarystatus}</p>}
                        {/* <p>Rent</p> */}
                    </div>
                    {/* <div className="border border-white rounded-lg w-full p-2 flex items-center justify-center gap-4 text-2xl uppercase text-center">
                                <p>Add to Library</p>
                            </div> */}
                    <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-lg border-b-2">
                        <p>Rewards</p>
                        <p className="flex items-center gap-2">Earn Tokens<FaCircleQuestion className="text-[#CB2742]" /></p>
                    </div>
                    <div className="rounded-lg w-full p-2 flex items-center justify-between gap-4 text-lg border-b-2">
                        <p>Multiplayer</p>
                        <p className="flex items-center gap-2">Instructions<FaCircleQuestion className="text-[#CB2742]" /></p>
                    </div>
                </div>
            </div>
            <Toaster />
        </main >
    )
}