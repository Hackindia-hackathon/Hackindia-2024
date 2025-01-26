import React from "react";
import ContentPage from './ContentPage'
import NewUser from '../components/NewUser'
import ExistingUser from '../components/ExistingUser';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (

    <div className="container flex">
      <main className="bg-sky-500 w-1/2 h-[100vh] flex items-center justify-center">
        <ContentPage />
      </main>
      <div className="w-0 " style={{ borderRight: "12vw solid transparent", borderTop: "100vh solid #0ea5e9" }}></div>
      <main className="bg-white w-1/2 flex flex-col justify-center items-center">
        <h1 className='text-center mb-14 text-black font-bold text-7xl'>Expense<span className='text-sky-500'>Sol</span></h1>
        <div className=" h-[28rem]">
          <Outlet />
        </div>
      </main>
    </div>

  );
};

export default MainPage;
