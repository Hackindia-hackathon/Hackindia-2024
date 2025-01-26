import React, { useState, createContext, useContext } from 'react';
import { FiHome, FiMenu, FiChevronDown, FiSearch } from 'react-icons/fi';
import { CiPill } from 'react-icons/ci';
import Home from '../pages/Home';
import Medications from '../pages/Medicines';
import Logs from '../pages/logs';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Medications', icon: CiPill },
  { name: 'Transactions', icon: FiSearch },
];

const SidebarContext = createContext();

export default function Sidebar({ firstName, lastName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="min-h-screen flex bg-gray-100">
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block bg-[#0b0a0b] text-white w-60`}
        >
          <SidebarContent />
        </div>

        <div className="flex-1">
          <MobileNav firstName={firstName} lastName={lastName} onOpen={toggleSidebar} />
          {activeTab === 'Home' && <Home />}
          {activeTab === 'Medications' && <Medications />}
          {activeTab === 'Transactions' && <Logs />}
        </div>
      </div>
    </SidebarContext.Provider>
  );
}

function SidebarContent() {
  const { activeTab, setActiveTab } = useContext(SidebarContext);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 text-2xl font-bold">PharmChain</div>
      <nav className="flex-1 mb-2">
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            active={activeTab === link.name}
            onClick={() => setActiveTab(link.name)}
          >
            {link.name}
          </NavItem>
        ))}
      </nav>
    </div>
  );
}

function NavItem({ icon: IconComponent, children, active, onClick }) {
  return (
    <div
      className={`flex m-2 items-center p-4 mx-4 rounded-lg cursor-pointer ${
        active ? 'bg-blue-800' : 'hover:bg-blue-800'
      }`}
      onClick={onClick}
    >
      <IconComponent className="mr-4 text-lg" />
      <span>{children}</span>
    </div>
  );
}

function MobileNav({ onOpen, firstName, lastName }) {
  return (
    <div className="flex m-2 items-center justify-between bg-white p-4 shadow-md md:hidden">
      <button onClick={onOpen}>
        <FiMenu className="text-xl" />
      </button>

      <div className="text-2xl font-bold">PharmChain</div>

      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://www.freepik.com/free-icon/user_14023446.htm#query=default%20avatar&position=8&from_view=keyword&track=ais"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block">
            <span>{firstName} {lastName}</span>
          </div>
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
}
