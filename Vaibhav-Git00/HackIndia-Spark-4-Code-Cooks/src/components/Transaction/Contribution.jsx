import React, { useState } from "react";
import InputFields from "./InputFields";
import { PlusIcon } from "@heroicons/react/16/solid";

const Contribution = ({isChildVisible,setIsChildVisible,amount, setAmount, users,setUsers,numInputs,setNumInputs,showTable,setShowTable} ) => {
  
    const setOffShow=()=>{
        setIsChildVisible(false);
        
    } 


  // for visible child
  const setFalse = () => {
    setIsChildVisible(false);
    setShowTable(true);
  };

  // for input validation
  



  return (
    <div className="flex justify-center my-8 ">
      {/* Button to toggle visibility */}
     
     <button
        onClick={() => setIsChildVisible(!isChildVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 flex justify-center items-center gap-2  "
      >
      <span>Add Money </span> <PlusIcon width={20}/>
      </button>
    

      
      {isChildVisible && (
        <div className="fixed inset-0 flex  justify-center items-center bg-black bg-opacity-50 z-50">
      
          <div className=" flex flex-col space-y-5 bg-white border border-gray-300  shadow-lg relative p-10">
            
            <div className="flex justify-between gap-2">
              <label htmlFor="amount" className="font-semibold text-lg"> Amount :  </label>
              <input
                type="number"
                placeholder="Enter the Amount "
                className="border border-gray-300 px-3 py-2 rounded-md mr-2"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            
            
            { <InputFields users={users}  setUsers={setUsers} numInputs={numInputs} setNumInputs={setNumInputs}/>}

            <button
              className="bg-blue-500  text-white px-4 py-2 rounded-md"
              onClick={setFalse}
            >
              Submit
            </button>

            
             <div className="absolute -top-4  right-1 cursor-pointer " onClick={setOffShow}><img src="./cross.png" alt="Corss" width={28} /></div>
          </div>
        </div>
      )}





    </div>
  );
};

export default Contribution;
