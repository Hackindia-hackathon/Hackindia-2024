import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, AboutUs, Footer } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#13131a]">  {/* Add margin-top here */}
      <div className=" mt-4 flex flex-1">
        {/* Sidebar for larger screens */}
        <div className="sm:flex hidden mr-10">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
