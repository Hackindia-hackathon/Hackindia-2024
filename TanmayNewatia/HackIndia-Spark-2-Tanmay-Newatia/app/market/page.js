import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

export default function MarketPage() {
    return (
        <main className="w-screen min-h-screen mt-[60px] md:mt-[80px] bg-[#1E1E1E]">
            <div className="max-sm:hidden fixed left-0 md:max-w-[300px] w-1/2 h-screen bg-[#1A1A1A]">
                <div className="w-10/12 mx-auto mt-[20px]">
                    <div className="flex text-xl items-center justify-between">
                        <p className="font-semibold">
                            Filter
                        </p>
                        <VscSettings />
                    </div>
                    <div className="border my-2 border-white rounded-lg w-full p-1 flex items-center justify-center gap-4 text-lg uppercase text-center">
                        <p>Game</p>
                    </div>
                    <div className="border my-2 border-white rounded-lg w-full p-1 flex items-center justify-center gap-4 text-lg uppercase text-center">
                        <p>Equipment</p>
                    </div>
                    <div className="border my-2 border-white rounded-lg w-full p-1 flex items-center justify-center gap-4 text-lg uppercase text-center">
                        <p>Assets</p>
                    </div>
                    <div className="border my-2 border-white rounded-lg w-full p-1 flex items-center justify-center gap-4 text-lg uppercase text-center">
                        <p>People</p>
                    </div>
                    <div className="my-2 text-white/[0.8] flex text-lg items-center justify-between border-b-2 border-white border-opacity-80">
                        <p className="font-semibold">
                            Availability
                        </p>
                        <IoIosArrowDown />
                    </div>
                    <div className="my-2 text-white/[0.8] flex text-lg items-center justify-between border-b-2 border-white border-opacity-80">
                        <p className="font-semibold">
                            Types
                        </p>
                        <IoIosArrowDown />
                    </div>
                    <div className="my-2 text-white/[0.8] flex text-lg items-center justify-between border-b-2 border-white border-opacity-80">
                        <p className="font-semibold">
                            Color
                        </p>
                        <IoIosArrowDown />
                    </div>
                    <div className="my-2 text-white/[0.8] flex text-lg items-center justify-between border-b-2 border-white border-opacity-80">
                        <p className="font-semibold">
                            Game
                        </p>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div className="w-8/12 sm:ml-[400px] pt-[20px] flex flex-col items-center pb-[20px]">
                <div className="bg-white flex items-center p-2 rounded-lg text-xl gap-4 w-11/12">
                    <div className="text-black">
                        <BiSearch />
                    </div>
                    <input type="search" placeholder="Find games, add-ons and more" className="text-md w-full h-full p-2 focus-visible:outline-none text-black" />
                </div>
                <div className="flex flex-wrap mt-[20px] gap-4 w-11/12 justify-center">
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img1.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Scepter
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img2.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Forsaken
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>98</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img3.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Slime
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>09</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img4.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Kurunami
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>67</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img5.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Xerofang
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>47</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img6.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Toon
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>17</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img7.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Scepter
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img8.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Scepter
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-white w-[250px] h-[250px] flex flex-col justify-center items-center">
                        <img src="/market/img9.svg" alt="Scepter" className="w-8/12 object-contain" />
                        <div className="flex justify-between w-10/12 mx-auto">
                            <p>
                                Scepter
                            </p>
                            <div className="flex">
                                <img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}