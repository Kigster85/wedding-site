import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const ActiveButton = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink to={to} className={isActive ? 'active' : ''}>
      <button>{label}</button>
    </NavLink>
  );
};
export default ActiveButton;
