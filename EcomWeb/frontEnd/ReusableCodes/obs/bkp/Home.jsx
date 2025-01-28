import React from "react";
import DotArrow from "./DotArrow";
import Dots from "./Dots"
import DotsWithNavbar from "./DotsWithNavbar";
import L1 from "./L1";
import DotsWithPrompt from "./DotsWithPrompt";
import IPExtractionDemo from "./IPExtractionDemo";
import DistributedDots from "./DistributedDots";
import CustomArrow from "./CustomArrow";
import ExamplePage from "./ExamplePage";

import Fip from "./Fip";


const Home = () => {
  return (
    <div className="">
      {/* <Dots /> */}

      <DotsWithNavbar />

      <Fip />

      {/* <L1 /> */}

      {/* <DotsWithPrompt /> */}

      {/* <ExtractIPs /> */}

      {/* <IPExtractionDemo /> */}

      {/* <DistributedDots /> */}


      {/* <CustomArrow


        startX={50} // Starting point (x)
        startY={50} // Starting point (y)
        length={1500} // Length of the arrow
        angle={-0} // Angle in degrees (e.g., 45° for upward-right direction)
        color="red" // Arrow color
        width={5} // Line thickness
        animationDuration={5} // Time (seconds) for animation
      /> */}




    </div>
  )
}

export default Home
