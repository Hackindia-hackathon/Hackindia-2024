'use client'

import { Advent_Pro } from "next/font/google";
import SearchBox from "@/components/home/searchbox";
import Link from "next/link";
import gamedetails from "../lib/gamedetails";
import { FaRegPlayCircle } from "react-icons/fa";
import { getViews, registerView } from "@/components/datacollection/gameview";

const advent = Advent_Pro({ subsets: ["latin"] });

export default function Home() {
  const handleGameView = (slug: string) => async () => {
    const views = await getViews(slug);
    await registerView(slug);
  }

  const GameList = gamedetails.map((game, index) => {
    return (
      // <Link key={index} href={`game/${game.slug}`} className={`w-[300px] h-[350px] grow-0 mx-auto bg-${game.slug} bg-cover bg-no-repeat rounded-lg`}>
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
      </Link>
    )
  });
  return (
    <main className={"w-screen min-h-screen bg-home-image bg-cover bg-no-repeat mt-[80px] max-[768px]:mt-[60px] flex flex-col justify-between " + advent.className} >
      <SearchBox />
      <div className="mb-8">
        <h1 className={"text-6xl text-center text-[#CB2742] uppercase font-bold " + advent.className}>Featured Games</h1>
        <div className="flex flex-wrap w-8/12 items-center justify-evenly mx-auto mt-4 gap-8">
          {GameList}
        </div>
      </div>
    </main >
  );
}