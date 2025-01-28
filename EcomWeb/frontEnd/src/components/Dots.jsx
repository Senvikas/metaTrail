import React from "react";
import DotArrow from "./DotArrow";

const Dots = () => {
  return (
    <div className="flex flex-wrap justify-start">
      <div>
        {/* First Dot with Arrow */}
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>

      <div className="ml-[140px]">

        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>

      <div className="ml-[140px]">

        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>

      <div className="ml-[140px]">

        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>


      <div className="ml-[140px]">
        {/* Second Dot with Arrow */}
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>



      <div className="ml-[140px]">
        
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>


      <div className="ml-[10px]">
      
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div>


      {/* <div className="ml-[140px]">
   
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div> */}


      {/* <div className="ml-[140px]">
        <DotArrow
          title="Packets at IPD"
          circleSize={120}
          bgColor="bg-teal-500"
          textColor="text-white"
          arrowLength={120}
          arrowColor="blue"
          arrowWidth={3}
          arrowDirection="right"
          onClick={() => alert("Circle Clicked!")}
        />
      </div> */}
    </div>
  );
};

export default Dots;
