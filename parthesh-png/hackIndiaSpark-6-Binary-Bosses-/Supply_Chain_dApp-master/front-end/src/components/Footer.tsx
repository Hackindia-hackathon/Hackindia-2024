// import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-slate-900">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <p className="text-5xl italic text-green-300">
          SupdApp
        </p>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 sm:flex-row flex-col w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Contact
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Privacy and Policy
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Terms of Service
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Partners
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          dApps
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
      A supply chain DApp is a decentralized application that utilizes blockchain technology 
      to enhance transparency, traceability, and efficiency in the management of supply chain processes.
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@SupChain.com
      </p>
    </div>
  </div>
);

export default Footer;
