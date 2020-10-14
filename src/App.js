import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Nav/Navbar';
import Projects from './components/Projects';
import {PortfolioContextProvider} from './Context';

function App() {
  
  return (
    <>
      <PortfolioContextProvider>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </PortfolioContextProvider>
    </>
  );
}

export default App;
