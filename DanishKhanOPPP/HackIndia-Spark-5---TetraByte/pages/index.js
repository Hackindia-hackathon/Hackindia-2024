import React, { useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  MovingSubmenu,
  Preloader,
  Signup,
  Login,
  Header, // Import Header component
  Search, // Import other components as needed
  SideBar,
  Home,
  TradeTokens,
  TopExchangeTokens,
  Networks,
  Trading,
  Pricing,
  Profile,
  Setting,
  AddTokenPair
} from '../components/index';
import { CONTEXT } from "../context/context";
// import { set } from 'mongoose'; // This line seems unnecessary for this component

const Index = () => {
  const { TRADING_BOT } = useContext(CONTEXT); // Use TRADING_BOT as needed
  const [activeComponent, setActiveComponent] = useState("Home");
  const [membershipType, setMembershipType] = useState("Premium");
  const [authBackEndID, setAuthBackEndID] = useState("");
  const [Networks, setNetworks] = useState({});
  const [networkName, setNetworkName] = useState();
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  return (
    <div>
      <MovingSubmenu />
      <Preloader />
      {activeComponent === "Signup" && (
        <Signup
          axios={axios}
          setActiveComponent={setActiveComponent}
          notifyError={notifyError}
          notifySuccess={notifySuccess}
        />
      )}
      {activeComponent === "Login" && (
        <Login
          axios={axios}
          setActiveComponent={setActiveComponent}
          notifyError={notifyError}
          notifySuccess={notifySuccess}
        />
      )}
      {/* Optionally render a default view or component if no active component matches */}
      {activeComponent !== "Signup" && activeComponent !== "Login" && (
        <div className='techwave_fn_wrapper'>
          <div className='techwave_fn_wrap'>
            <Search />
            <Header 
              networkName={networkName}
              setActiveComponent={setActiveComponent}
            />
            <SideBar setActiveComponent={setActiveComponent} />
            {activeComponent === "Home" ? (
              <Home />
            ) : activeComponent === "Trade Tokens" ? (
              <TradeTokens />
            ) : activeComponent === "Top Exchange Tokens" ? (
              <TopExchangeTokens />
            ) : activeComponent === "Networks" ? (
              <Networks networkName={networkName} />
            ) : activeComponent === "Trading" ? (
              <Trading axios={axios} trading={""} />
            ) : activeComponent === "Pricing" ? (
              <Pricing />
            ) : activeComponent === "Profile" ? (
              <Profile setActiveComponent={setActiveComponent} />
            ) : activeComponent === "Setting" ? (
              <Setting />
            ) : activeComponent === "Add Token Pair" ? (
              <AddTokenPair />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
