'use client'

import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function SearchBox() {
    const [query, setQuery] = useState('');
    return (
        <div className="flex items-center w-11/12 mx-auto pt-4">
            <img src="/logo.svg" alt="SpawnPoint" className="w-[50px]" />
            <div className="w-10/12 flex justify-center mx-auto">
                <div className="bg-white flex items-center p-2 rounded-lg text-xl md:w-1/2 gap-4">
                    <div className="text-black">
                        <BiSearch />
                    </div>
                    <input type="search" placeholder="Find games, add-ons and more" className="text-md w-full h-full p-2 focus-visible:outline-none text-black" />
                </div>
            </div>
        </div>
    )
}