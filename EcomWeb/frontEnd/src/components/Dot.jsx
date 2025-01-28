
import React from "react";
import { motion } from "framer-motion";

const Dot = ({
  title,
  onClick,
  size = 32, // Default size of the dot (in pixels)
  bgColor = "bg-teal-500", // Default background color
  textColor = "text-white", // Default text color
  hoverScale = 1.1, // Scale when hovered
  description,
}) => {
  return (
    <motion.div
      className={`${bgColor} ${textColor} text-center font-semibold rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      style={{ width: `${size}px`, height: `${size}px` }}
      whileHover={{ scale: hoverScale }}
      onClick={onClick}
    >
      <span className="text-xs" title={description}>{title}</span>
    </motion.div>
  );
};

export default Dot;