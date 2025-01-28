import React from "react";
import { motion } from "framer-motion";

const CustomArrow = ({
  startX = 0,
  startY = 0,
  length = 100,
  angle = 0,
  color = "blue",
  width = 3,
  arrowHeadSize = 10,
}) => {
  // Calculate the endpoint of the line
  const endX = startX + length * Math.cos((angle * Math.PI) / 180);
  const endY = startY + length * Math.sin((angle * Math.PI) / 180);

  // Corrected arrowhead calculation
  const arrowHead = `
    ${endX - arrowHeadSize * Math.cos((angle - 30) * Math.PI / 180)},${endY - arrowHeadSize * Math.sin((angle - 30) * Math.PI / 180)}
    ${endX + arrowHeadSize * Math.cos((angle) * Math.PI / 180)},${endY + arrowHeadSize * Math.sin((angle) * Math.PI / 180)}
    ${endX - arrowHeadSize * Math.cos((angle + 30) * Math.PI / 180)},${endY - arrowHeadSize * Math.sin((angle + 30) * Math.PI / 180)}
  `;

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        overflow: "visible",
      }}
    >
      {/* Arrow Line */}
      <motion.line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth={width}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3 }}
      />

      {/* Arrowhead */}
      <motion.polygon
        points={arrowHead}
        fill={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
  );
};

export default CustomArrow;
