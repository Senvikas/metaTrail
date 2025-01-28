import React from "react";
import CustomArrow from "./CustomArrow";

const ExamplePage = () => {
  return (
    <div className="relative h-screen bg-gray-200">
      {/* Arrow pointing right */}
      <CustomArrow startX={1750} startY={-541} length={120} angle={45} color="blue" />
      
      {/* Arrow pointing upwards */}
      <CustomArrow startX={1750} startY={-545} length={120} angle={23} color="blue" />
      
      {/* Arrow tilted at 45 degrees */}
      <CustomArrow startX={1750} startY={-545} length={120} angle={-23} color="blue" />
      {/* Arrow tilted at 45 degrees */}
      <CustomArrow startX={1750} startY={-545} length={120} angle={-45} color="blue" />
    </div>
  );
};

export default ExamplePage;
