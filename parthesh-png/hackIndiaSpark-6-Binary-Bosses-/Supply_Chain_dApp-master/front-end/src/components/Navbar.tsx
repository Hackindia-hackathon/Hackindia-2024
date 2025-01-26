import React, { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
 

import S2 from '../assets/S2.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Router>
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-[Poppins] cursor-pointer">
              <img className="h-20 inline" src={S2} alt="Logo" />
              Supply The World
            </Link>

            <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={handleMenuClick}>
              <HiMenuAlt4 />
            </span>
          </div>

          <ul
            className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
              menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0">
              <NavLink exact to="" className="text-xl hover:text-cyan-500 duration-500" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink to="/About" className="text-xl hover:text-cyan-500 duration-500" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink to="/Market" className="text-xl hover:text-cyan-500 duration-500" activeClassName="active-link">
                Market
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink to="/contact" className="text-xl hover:text-cyan-500 duration-500" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
            <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-4 py-2 mx-4 hover:bg-cyan-700 rounded">
              Register
            </button>
            <button className="bg-green-400 text-white font-[Poppins] duration-500 px-4 py-2 mx-4 hover:bg-green-700 rounded">
              Login
            </button>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
