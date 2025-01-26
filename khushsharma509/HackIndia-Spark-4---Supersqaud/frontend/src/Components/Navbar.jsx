import React from 'react';
import { MdOutlineForest } from 'react-icons/md';
import {Link , NavLink, useNavigate} from 'react-router-dom';
import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../store/data-slice';
import metamask from '../assets/metamask.png';

const Navbar = () => {

  const dispatch = useDispatch();
  const walletAddress = useSelector((state) => state.data.walletAddress);

  const connectWallet = async () => {
    console.log('Requesting account...');

    if(window.ethereum) {
      console.log('MetaMask detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(dataActions.setWalletAddress(accounts[0]));
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  };

  const connectWalletRef = useRef();
  const navigate = useNavigate();

  return (
    <header className=" text-black p-4  bg-[#040B11]">
      <div className="container mx-auto px-10 flex justify-between items-center  bg-[#040B11]">
        
        <Link to="/" className="flex gap-2  bg-[#040B11]" >
          <MdOutlineForest className="text-3xl mt-1   text-[#21e786]  bg-[#040B11] transition-all duration-100 hover:text-2xl"  />
          <h1 className="font-bold text-3xl text-white  bg-[#040B11]  transition-all duration-100 hover:text-4xl">GreenCredits</h1>
          </Link>
       
        <nav className="flex items-center gap-6 font-bold  bg-[#040B11]">

          <NavLink 
                                to="/tokens"
                                    className={({isActive}) => //note that here class is written in backtisk '' and not in "" because we will change the classes in future according to our activity so to make it dynamic it is written in that way
                                        `block mr-10 text-xl duration-200 text-white fontFamily: 'Bakbak One, sans-serif'  bg-[#040B11]  ${ isActive ? "text-[#3f4233]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#21e786] hover:underline  lg:p-0`
                                    }
                                > 
                                    Marketplace
                                </NavLink>
           <NavLink 
                                to="/calculate"
                                    className={({isActive}) => //note that here class is written in backtisk '' and not in "" because we will change the classes in future according to our activity so to make it dynamic it is written in that way
                                        `block py-2 pr-4 pl-3 mr-10 text-xl duration-200  bg-[#040B11]  text-white font-Bakbak One ${ isActive ? "text-[#3f4233]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#21e786] hover:underline lg:p-0`
                                    }
                                > 
                                    Trace Carbon Footprints 👣
             </NavLink>
             <NavLink 
                                to="/register"
                                    className={({isActive}) => //note that here class is written in backtisk '' and not in "" because we will change the classes in future according to our activity so to make it dynamic it is written in that way
                                        `block py-2 pr-4 pl-3 duration-200 text-xl mr-10  bg-[#040B11]  text-white font-Bakbak One ${ isActive ? "text-[#3f4233]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#21e786] hover:underline lg:p-0`
                                    }
                                > 
                                    List your 🍀 Credits
                                </NavLink>
                                <NavLink 
                                to="/learn"
                                    className={({isActive}) => //note that here class is written in backtisk '' and not in "" because we will change the classes in future according to our activity so to make it dynamic it is written in that way
                                        `block py-2 pr-4 pl-3 duration-200 text-xl  bg-[#040B11] mr-10  text-white font-Bakbak One ${ isActive ? "text-[#3f4233]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#21e786] hover:underline lg:p-0`
                                    }
                                > 
                                    Learn
                                </NavLink>
          {!walletAddress && <button className="   text-black py-2 px-4 mr-7 rounded flex items-center gap-[2px] bg-[#21e74f]  transition-all duration-100 hover: hover:text-xl" onClick={connectWallet} ref={connectWalletRef}>Connect Wallet <img src={metamask} className='w-15'/></button>}
          {
            walletAddress && <button className='whitespace-nowrap text-white text-xs hover:text-[#d5b549]' onClick={()=>{
              navigate('/myBalance');
            }}>{walletAddress}</button>
          }
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
