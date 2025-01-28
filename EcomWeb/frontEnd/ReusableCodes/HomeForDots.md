import React from 'react';
import HeroSection from './HeroSection.jsx';
import GoToTop from './GoToTop.jsx';
import Hp from './Hp.jsx'
import L1 from './L1.jsx'
import Dot from './Dot.jsx';
import CurvyLine from './CurvyLine.jsx';
import DotWithCurvyLine from './DotWithCurvyLines.jsx';

const Home = () => {
  return (
    <div className="text-center">
      
      {/* <Hp /> */}

      {/* <Dot
            key="1"
            title="title"
            description="{step.description}"
            onClick={() => setActiveStep(step)} // Set the active step on click
            size={60} // Example size in pixels
            bgColor="bg-teal-500" // Example background color
            textColor="text-white" // Example text color
          />

      <Dot /> */}

      {/* <CurvyLine
        start={{ x: 100, y: 100 }}
        end={{ x: 400, y: 300 }}
        strokeColor="blue"
        strokeWidth={3}
      /> */}



<DotWithCurvyLine
        start={{ x: 100, y: 100 }}
        end={{ x: 400, y: 300 }}
        dot1Props={{
          title: "Start",
          size: 60,
          bgColor: "bg-blue-500",
          textColor: "text-white",
        }}
        dot2Props={{
          title: "End",
          size: 60,
          bgColor: "bg-green-500",
          textColor: "text-white",
        }}
        lineProps={{
          strokeColor: "blue",
          strokeWidth: 3,
        }}
      />





      {/* GoToTop icon */}
      <GoToTop />
    </div>
  );
};

export default Home;
