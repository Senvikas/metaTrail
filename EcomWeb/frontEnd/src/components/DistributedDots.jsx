import React from "react";
import { motion } from "framer-motion";

const DistributedDots = () => {
  const circleRadius = 60; // Radius of "Final Layer" dot
  const distributedDots = [
    { title: "FingerPrinting starts", key: 1, offset: { x: 150, y: -200 } },
    { title: "FootPrinting starts", key: 2, offset: { x: 300, y: -50 } },
    { title: "Entity Profiling", key: 3, offset: { x: 300, y: 150 } },
    { title: "Connection Analysis", key: 4, offset: { x: 150, y: 300 } },
  ];

  const calculateArrowPath = (offset) => {
    const startX = circleRadius; // Center of "Final Layer" dot
    const startY = circleRadius;
    const endX = offset.x + circleRadius + 20; // Center of the distributed dot (increased length)
    const endY = offset.y + circleRadius + 20; // Center of the distributed dot (increased length)

    return {
      path: `M${startX},${startY} L${endX},${endY}`,
      arrowHead: `${endX - 10},${endY - 5} ${endX},${endY} ${
        endX - 10
      },${endY + 5}`, // Arrowhead coordinates
    };
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-100 text-white">
      {/* Final Layer Dot */}
      <div className="relative">
        <motion.div
          className="z-2  bg-teal-500 text-white text-center font-semibold rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          style={{
            width: `${circleRadius * 2}px`,
            height: `${circleRadius * 2}px`,
          }}
          whileHover={{ scale: 1.1 }}
          onClick={() => alert("Final Layer Clicked!")}
        >
          Final Layer
        </motion.div>

        {/* Arrows and Distributed Dots */}
        {distributedDots.map((dot) => {
          const { path, arrowHead } = calculateArrowPath(dot.offset);

          return (
            <React.Fragment key={dot.key}>
              {/* Arrow from Final Layer to the new dot */}
              <svg
                className="absolute "
                style={{ top: 0, left: 60, pointerEvents: "none" }}
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Arrow Line */}
                <motion.path
                  d={path}
                  stroke="blue"
                  strokeWidth="3"
                  fill="transparent"
                  initial={{ pathLength: 0+200 }}
                  animate={{ pathLength: 10 }}
                  transition={{ duration: 0 }}
                />
                {/* Arrowhead */}
                <polygon points={arrowHead} fill="blue" />
              </svg>

              {/* Distributed Dot */}
              <div
                className="absolute -mb-10"
                style={{
                  top: dot.offset.y + circleRadius -70,
                  left: dot.offset.x + circleRadius,
                }}
              >
                <motion.div
                  className="bg-teal-400 text-white text-center font-semibold rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => alert(`${dot.title} Clicked!`)}
                >
                  {dot.title}
                </motion.div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DistributedDots;
