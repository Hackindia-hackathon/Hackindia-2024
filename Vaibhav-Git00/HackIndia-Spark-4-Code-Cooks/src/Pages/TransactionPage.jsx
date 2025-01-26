import React from "react";
import NavBar from "../components/Transaction/NavBar";
import MainContent from "../components/Transaction/MainContent";

const TransactionPage = () => {
  return (
    <div >
     
      <div className="transaction w-full h-full" >
        {/* <NavBar /> */}
        <MainContent />
      </div>
    </div>
  );
};

export default TransactionPage;
