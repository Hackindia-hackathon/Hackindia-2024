'use client'

import { useEffect, useState } from "react";
import { getLibrary } from "@/components/datacollection/gamelibrary";
import { usePathname } from "next/navigation";
import gameid from "@/lib/gameid";
import gamedetails from "@/lib/gamedetails";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import { useActiveAccount } from "thirdweb/react";

export default function LibraryPage() {
    const account = useActiveAccount();
    const path = usePathname();
    const [library, setLibrary] = useState([]);

    const checkLibrary = async () => {
        // console.log(wallet.connected);
        if (!account) {
            // toast.error('Connect your wallet first!');
            return;
        }
        const library = await getLibrary("", "", account?.address, 0);
        setLibrary(library["game_id"]);
    }
    useEffect(() => {
        checkLibrary();
    }, [account]);

    const handleGameView = (slug) => async () => {
        const views = await getViews(slug);
        await registerView(slug);
    }
    const GameList = gamedetails.map((game, index) => {
        return (
            // <Link key={index} href={`game/${game.slug}`} className={`w-[300px] h-[350px] grow-0 mx-auto bg-${game.slug} bg-cover bg-no-repeat rounded-lg`}>
            (library?.indexOf(index) == -1) ?
                <></>
                :
                <Link onClick={handleGameView(game.slug)} key={index} href={`game/${game.slug}`} className={`w-[300px] h-[350px] grow-0 hover:scale-[1.01] mx-auto bg-cover bg-no-repeat rounded-lg`} style={{ backgroundImage: `url('/game/${game.slug}.webp')` }}>
                    <div className="text-2xl h-full w-full opacity-0 hover:opacity-100 transition-opacity hover:bg-black/[0.5] rounded-lg flex justify-start items-end p-8">
                        <div className="flex w-full justify-evenly items-center">
                            <div className="flex flex-col gap-2 text-3xl">
                                <FaRegPlayCircle />
                                <p className="text-xl">Play</p>
                            </div>
                            <p className="text-3xl">{game.name}</p>
                        </div>
                    </div>
                </Link >
        )
    });
    return (
        (account) ?
            (library?.length > 0) ?
                <main className="w-screen min-h-screen bg-home-image bg-cover bg-no-repeat pt-[100px] max-[600px]:mt-[60px] py-[100px] flex flex-col justify-between">
                    <h1 className={"text-6xl text-left w-10/12 mx-auto text-[#CB2742] uppercase font-bold border-b border-white"}>Your Library</h1>
                    <div className="flex flex-wrap w-10/12 items-center mx-auto justify-between mt-4 gap-8">
                        {GameList}
                    </div>
                </main >
                :
                <main className="flex flex-col gap-4 bg-home-image bg-cover bg-no-repeat justify-center items-center h-screen w-screen">
                    <p className="text-white text-2xl w-10/12 text-center">No game in your library! Try and add games to your library now!</p>
                    <Link href="/" className="text-white text-2xl p-2 rounded-xl text-center border-white border hover:text-[#CB2742] hover:border-[#CB2742]">Play</Link>
                </main >
            :
            <main className="flex flex-col gap-4 bg-home-image bg-cover bg-no-repeat justify-center items-center h-screen w-screen">
                <p className="text-white text-2xl w-10/12 text-center">Connect Wallet to have a look at your library!</p>
                <Link href="/" className="text-white text-2xl p-2 rounded-xl text-center border-white border hover:text-[#CB2742] hover:border-[#CB2742]">Home</Link>
            </main>
    )
}