import React from 'react';
import HeroSection from './HeroSection.jsx';
import GoToTop from './GoToTop.jsx';
import Hp from './Hp.jsx'
import L1 from './L1.jsx'

const Home = () => {
  return (
    <div className="text-center">
      
      <Hp />

      <L1 />

      {/* GoToTop icon */}
      <GoToTop />
    </div>
  );
};

export default Home;
