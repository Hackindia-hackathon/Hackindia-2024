import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: #ffffffcc; /* Semi-transparent white */
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* For the glassmorphism look */
  z-index: 1000;

  @media (min-width: 601px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #757575;
  transition: color 0.3s, transform 0.3s;

  &.active {
    color: #f44336; /* You can change to the desired active color */
  }

  &:hover {
    color: #f44336; /* Hover color */
    transform: scale(1.1); /* Slightly enlarge on hover */
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <NavItem exact to="/" activeClassName="active">
        <Icon icon={faHome} />
      </NavItem>
      <NavItem to="/myAssets" activeClassName="active">
        <Icon icon={faBriefcase} />
      </NavItem>
      <NavItem to="/profile" activeClassName="active">
        <Icon icon={faUser} />
      </NavItem>
    </BottomNavWrapper>
  );
};

export default BottomNav;