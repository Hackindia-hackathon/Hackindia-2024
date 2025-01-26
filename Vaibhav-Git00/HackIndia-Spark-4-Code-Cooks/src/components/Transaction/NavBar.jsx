import { TvIcon } from "@heroicons/react/16/solid";
import React from "react";
import { CurrentDate } from "../../helper";

const NavBar = () => {
  return (
    <div >
    <nav className="flex justify-around   items-center my-8 mx-16 gap-32">
      <h2 className="text-5xl font-semibold ">Transactions</h2>
      <div className="flex justify-center items-center  gap-10">
        <div className="flex justify-center items-center  border-2 border-gray-400 py-[0.4rem] rounded">
          <input
            className="px-3  focus:outline-none "
            type="text"
            placeholder="Search transaction "
            name="search"
            style={{}}  
          />
          <button
            type="submit"
            className="mr-2 text-white font-bold border-1 border-gray-400 flex justify-center items-center "
            
          >
            <img src="/search-48.png" alt="search" width={30} />
          </button>
        </div>


        <div className="flex justify-center items-center  border-2 border-gray-400 py-2 rounded pr-3 ">
          <p className="font-normal px-4">{CurrentDate()}</p>
          
          <img  className="py-[0.3rem] cursor-pointer px-1 "  src="/calender-1.png" alt="calender" width={20} />
        </div>


        <div className="w-40 bg-black">
          <button className="bg-black text-white flex justify-center  py-2 px-5">Export as CSV ^ </button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export function InputDemo() {
  return <input type="email" placeholder="Email" />;
}

export default NavBar;
