import React    from "react";
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
    <div class="Navbar">

    <Link to="/"><button class="active" >Home</button></Link>
    <div class="dropdown">
      <Link to="About"><button href="#about" class="dropbtn">About <i class="fa fa-caret-down"></i></button></Link>
        <div class="dropdown-content">
        <Link to="Our Story"><button>Our Story</button></Link>
        <Link to="Wedding Party"><button>Wedding Party</button></Link>
        </div>
    </div>
    <div class="dropdown">
    <Link to="Venue"><button href="#about" class="dropbtn">The Venue<i class="fa fa-caret-down"></i></button></Link>
        <div class="dropdown-content">
        <Link to="Where to Stay"><button>Where to Stay</button></Link>
        <Link to="Airport Information"><button>Airport Information</button></Link>
        <Link to="How To Get Around"><button>How To Get Around</button></Link>
        <Link to="What tyo Do In Town"><button>What to Do In Town</button></Link>

          <div class="dropdown-content2">
          <Link to="Maps"><button>Maps</button></Link>
          <Link to="Booking Accommodation"><button>Booking Accommodation</button></Link>
        </div>
        </div>

    </div>
    <div class="dropdown">
    <Link to="Schedule"><button class="dropbtn">Schedule<i class="fa fa-caret-down"></i></button></Link>
      <div class="dropdown-content">
      <Link to="Pre-Wedding Activities"><button>Pre-Wedding Activities</button></Link>
      <Link to="Day Of Wedding"><button>Day Of Wedding</button></Link>
      <Link to="Post Wedding Events"><button>Post-Wedding Events</button></Link>
      <Link to="FAQ's"><button>FAQs</button></Link>
      </div>
    </div>
    <Link to="Registry Links"><button>Registry Links</button></Link>
    <Link to="Socials"><button>Socials</button></Link>
    <Link to="Photos"><button>Photos</button></Link>
    <Link to="Contact"><button href="#contact">Contact</button></Link>

    <div id="navbar-right">
    <Link to="Log In"><button>Log On</button></Link>
    </div>
  </div>
  </nav>)
  };




export default Navigation;
