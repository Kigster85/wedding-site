import "./Navigation.css";
import React from "react";

function template() {
  return (
    <div class="Navbar">

      <button class="active" href='#index'>Home</button>
      <div class="dropdown">
        <button href="#about" class="dropbtn">About <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">
            <button>Our Story</button>
            <button>Wedding Party</button>
          </div>
      </div>
      <div class="dropdown">
        <button href="#about" class="dropbtn">The Venue<i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">
            <button>Where to Stay</button>
            <button>Maps</button>
            <button>Airport Information</button>
            <button>How To Get Around</button>
            <button>What to Do In Town</button>

            <div class="dropdown-content2">
            <button>Maps</button>
            <button>Booking Accommodation</button>
          </div>
          </div>

      </div>
      <div class="dropdown">
      <button class="dropbtn">Schedule<i class="fa fa-caret-down"></i></button>
        <div class="dropdown-content">
          <button>Pre-Wedding Activities</button>
          <button>Day Of Wedding</button>
          <button>Post-Wedding Events</button>
          <button>FAQs</button>
        </div>
      </div>
      <button>Registry Links</button>
      <button>Socials</button>
      <button>Photos</button>
      <button href="#contact">Contact</button>

      <div id="navbar-right">
        <button>Log On</button>
      </div>
    </div>
  );
};

export default template;
