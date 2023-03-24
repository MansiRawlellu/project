import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <div>
      <HeroSection/>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products/>} />
        
        <Route path="/Signup" element={<SignUp/>} />
         </Routes>
      </Router>

    </div>
  );
}

export default App;
