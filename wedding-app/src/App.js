import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurStory from './Pages/About/Our Story/OurStory';
import WeddingParty from './Pages/About/Wedding Party/WeddingParty'
//import Services from './components/Services';
import Contact from './Pages/Contact/Contact';
import Venue from './Pages/Venue/Venue.js'

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
        </Routes>
      </div>
    </Router>





  );
}

export default App;
