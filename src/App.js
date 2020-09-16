import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import DownloadVr from './Components/DownloadVr/DownloadVr';
import Events from './Components/Events/Events';
import UserComments from './Components/UserComments/UserComments';
import Subscribe from './Components/Subscribe/Subscribe';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Header />
        <Features />
        <DownloadVr />
        <Events />
        <UserComments />
        <Slider />
        <Subscribe />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
