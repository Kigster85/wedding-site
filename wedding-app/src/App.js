import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurStory from './Pages/About/Our Story/OurStory';
import WeddingParty from './Pages/About/Wedding Party/WeddingParty'
import Contact from './Pages/Contact/Contact';
import Venue from './Pages/Venue/Venue.js'
import Photos from './Pages/Photos/Photos';
import Login from './Pages/Login/Login';
import Schedule from './Pages/Schedule/Schedule';
import DayOfWedding from './Pages/Schedule/Day_Of_Wedding/Day_Of_Wedding';
import PostWeddingEvents from './Pages/Schedule/Post_Wedding_Events/Post_Wedding_Events';
import PreWeddingActivities from './Pages/Schedule/Pre_Wedding_Activites/Pre_Wedding_Activities';
import FAQs from './Pages/Schedule/FAQs/FAQs';
import Socials from './Pages/Socials/Socials';
import Registry from './Pages/Registry/Registry';
import Map from './Pages/Venue/WhereToStay/Map/Map';
import WhereToStay from './Pages/Venue/WhereToStay/WhereToStay';
import BookingAccommodation from './Pages/Venue/WhereToStay/BookingAccomodation/BookingAccommodation';
import AirportInfo from './Pages/Venue/AirportInfo/AirportInfo';
import HowToGetAround from './Pages/Venue/HowToGetAround/HowToGetAround';
import WhatToDoInTown from './Pages/Venue/WhatToDoInTown/WhatToDoInTown';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/our story" element={<OurStory/>} />        
        <Route path="/weddingparty" element={<WeddingParty/>} />        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/venue" element={<Venue/>} />
          <Route path="/wheretostay" element={<WhereToStay/>} />  
            <Route path="/map" element={<Map/>} />  
            <Route path="/bookingaccommodation" element={<BookingAccommodation/>} />  
          <Route path="/airportinfo" element={<AirportInfo/>} />  
          <Route path="/howtogetaround" element={<HowToGetAround/>} />  
          <Route path="/whattodointown" element={<WhatToDoInTown/>} />  
        <Route path="/photos" element={<Photos/>} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/schedule" element={<Schedule/>} />  
        <Route path="/day of wedding" element={<DayOfWedding/>} />  
        <Route path="/post wedding events" element={<PostWeddingEvents/>} />  
        <Route path="/pre wedding activities" element={<PreWeddingActivities/>} />  
        <Route path="/faqs" element={<FAQs/>} />  
        <Route path="/socials" element={<Socials/>} />  
        <Route path="/registry" element={<Registry/>} />  


        </Routes>
      </div>
    </Router>





  );
}

export default App;
