import React from "react";
import { motion } from "framer-motion";
// import {dotData} from "ConfigureDots.js";

const DotArrow = ({
  dotlength,
  title = "Title",
  ind,
  onClick,
  circleSize = 80,
  bgColor = "bg-teal-500",
  textColor = "text-white",
  arrowLength = 100,
  arrowColor = "blue",
  activeArrowColor = "red", // New prop for active arrow color
  arrowWidth = 4,
  arrowDirection = "right",
  isActive = false, // Prop to indicate if the arrow is active
}) => {
  const arrowStyles = {
    right: {
      x1: circleSize,
      y1: circleSize / 2,
      x2: circleSize + arrowLength-25,
      y2: circleSize / 2,
      svgStyle: { top: 0, left: 0 },
    },
  };

  const arrow = arrowStyles[arrowDirection] || arrowStyles["right"];

  return (
    <div className="relative flex items-center justify-center">
      {/* Arrow */}
      {ind !== dotlength - 1 && (
      <svg
        className="absolute pointer-events-none"
        style={arrow.svgStyle}
        width={circleSize + arrowLength + 20}
        height={circleSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line with Gradual Fill */}
        <motion.line
          x1={arrow.x1}
          y1={arrow.y1}
          x2={arrow.x2}
          y2={arrow.y2}
          stroke={isActive ? activeArrowColor : arrowColor} // Active or default color
          strokeWidth={arrowWidth}
          strokeDasharray={arrowLength} // Define the dash pattern for the entire arrow
          strokeDashoffset={isActive ? arrowLength : 0} // Start at 0 when not active
          animate={
            isActive
              ? { strokeDashoffset: 0 } // Gradually fill
              : { strokeDashoffset: 0 } // Keep fully visible when inactive
          }
          transition={{ duration: 1 }}
        />
        {/* Arrowhead */}
        <polygon
          points={`${arrow.x2},${arrow.y2 - 6} ${arrow.x2 + 10},${arrow.y2} ${
            arrow.x2
          },${arrow.y2 + 6}`}
          fill={isActive ? activeArrowColor : arrowColor}
        />
      </svg>
      )}

      {/* Circle */}
      <motion.div
        className={`${bgColor} ${textColor} text-center font-semibold rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
        style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
      >
        {title}
      </motion.div>
    </div>
  );
};

export default DotArrow;
