import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Carlist from '../Components/Carlist';
import Userfeedback from '../Components/Userfeedback';
import AppStoreBanner from '../Components/AppStoreBanner';
import CollaborateContact from '../Components/CollaborateContact';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Carlist />
      <Userfeedback />
      <AppStoreBanner />
      <CollaborateContact />
      <Footer />
    </div>
  );
};

export default HomePage;
