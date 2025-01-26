"use client";

import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./ui/Hero";
import { useNavigate } from "react-router-dom";
import image from "./image.png"
import { MdHeight } from "react-icons/md";



 export function HeroCard() {

  const navigate = useNavigate();

  return (
    
    
        <div className="relative flex flex-col gap-4  px-10 mt-20 bg-[#040B11] ">
        
        <div className="container py-11 ml-20 bg-[#040B11]">
      <div className="row bg-[#040B11]">
        <div className="col-lg-6 d-flex flex-column bg-[#040B11]">
          <div className="text-[#21e786] font-Nunito justify-center text-4xl mr-20 py-5 font-semibold bg-[#040B11]">Blockchain based GreenCredits and <br/> Automated Credit System</div>
          <div className="text-2xl text-white text-left bg-[#040B11]">Blockchain technology like Ethereum for managing<br/> carbon emissions data 
            and issuing green credits offers<br/> significant advantages in 
            terms of transparency,<br/> efficiency, and trustworthiness. 
            It aligns with global<br/> efforts to combat climate change by promoting<br/>
             verifiable reductions in greenhouse gas emissions and <br/>
             discouraging greenwashing practices.</div>
          
            <div className="-mt-80 ml-11  px-72 bg-[#040B11]">
            <img className="ml-80 bg-[#040B11]" src={image} style={{ height: '400px', width: '600px' }} alt="description" />

            </div>
          </div>
        </div>
        
      </div>

        
        
        {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center bg-transparent">
        Buy carbon credits
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 bg-transparent text-center">
        Offset your carbon footprint with ECO, the first carbon offset token on Ethereum
        </div> */}
        
         
        <button className="bg-[#21e786] dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2 ml-20 mt-[-7rem] mb-52"
        onClick={()=>{
          navigate('/tokens');
        }}
        >
          Buy now
        </button>
        
    
        </div>
     
    
  );
}
export default HeroCard;