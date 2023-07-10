import "./Navigation.css";
import ActiveButton from '../Button/Button'
import React, { useState } from 'react';


  
const Navigation = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <nav>
    <div class="Navbar">
      <ActiveButton exact to="/" label="Home"></ActiveButton>
    <div class="dropdown">
      <ActiveButton to="About" label="About" class="fa-solid fa-caret-down"></ActiveButton>
        <div class="dropdown-content">
        <ActiveButton to="Our Story" label="Our Story"></ActiveButton>
        <ActiveButton to="WeddingParty" label="Wedding Party"></ActiveButton>
        </div>
    </div>
    <div class="dropdown">
    <ActiveButton to="Venue" label="Venue"><i class="fa-solid fa-caret-down"></i></ActiveButton>
        <div class="dropdown-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <ActiveButton to="WhereToStay" label="Where To Stay" ><i class="fa-solid fa-caret-down"></i></ActiveButton>
        {showSubmenu && (
          <div class="dropdown-content2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ActiveButton to="Map" label="Map"></ActiveButton>
            <ActiveButton to="BookingAccommodation" label="Booking Accommodation"></ActiveButton>
          </div>)}
        <ActiveButton to="AirportInfo" label="Airport Information"></ActiveButton>
        <ActiveButton to="HowToGetAround" label="How To Get Around"></ActiveButton>
        <ActiveButton to="WhatToDoInTown" label="What To Do In Town"></ActiveButton>          
      </div>
    </div>
    <div class="dropdown">
    <ActiveButton to="Schedule" label="Schedule"><i class="fa-solid fa-caret-down"></i></ActiveButton>
      <div class="dropdown-content">
        <ActiveButton to="Pre Wedding Activities" label="Pre Wedding Activities"></ActiveButton>
        <ActiveButton to="Day Of Wedding" label="Day Of Wedding"></ActiveButton>
        <ActiveButton to="Post Wedding Events" label="Post Wedding Evetns"></ActiveButton>
        <ActiveButton to="FAQs" label="FAQs"></ActiveButton>
      </div>
    </div>
      <ActiveButton to="Registry" label="Registry"></ActiveButton>
      <ActiveButton to="Socials" label="Socials"></ActiveButton>
      <ActiveButton to="Photos" label="Photos"></ActiveButton>
      <ActiveButton to="Contact" label="Contact"></ActiveButton>
    <div id="navbar-right">
      <ActiveButton to="Login" label="Login"></ActiveButton>
    </div>
  </div>
  </nav>)
  };

export default Navigation;
