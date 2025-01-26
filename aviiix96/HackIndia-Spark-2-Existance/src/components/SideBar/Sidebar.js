import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #2c3e50;
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #34495e;
`;

const SidebarContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }
`;

const OpenButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  transition: opacity 0.3s ease;

  ${({ isOpen }) => isOpen && `
    opacity: 0;
    pointer-events: none;
  `}
`;

const NavLink = styled.div`
  display: block;
  padding: 12px;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#BDC3C7')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? '#1abc9c' : 'transparent')};

  &:hover {
    background-color: #16a085;
    color: #ffffff;
  }
`;

const Sidebar = ({ onPageChange, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OpenButton onClick={toggleSidebar} isOpen={isOpen}>
        <FaBars />
      </OpenButton>
      <SidebarWrapper isOpen={isOpen}>
        <SidebarHeader>
          <h2>Menu</h2>
          <CloseButton onClick={toggleSidebar}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>
        <SidebarContent>
          <NavLink 
            onClick={() => { onPageChange('upload'); toggleSidebar(); }} 
            isActive={activePage === 'upload'}
          >
            Upload
          </NavLink>
          <NavLink 
            onClick={() => { onPageChange('manage-assets'); toggleSidebar(); }} 
            isActive={activePage === 'manage-assets'}
          >
            Manage Assets
          </NavLink>
          <NavLink 
            onClick={() => { onPageChange('transaction'); toggleSidebar(); }} 
            isActive={activePage === 'transaction'}
          >
            Transaction
          </NavLink>
        </SidebarContent>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
