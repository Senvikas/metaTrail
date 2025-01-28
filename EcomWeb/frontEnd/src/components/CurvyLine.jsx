import React from "react";

const CurvyLine = ({ start, end, strokeColor = "black", strokeWidth = 2 }) => {
  // Calculate the control points for a smooth curve (Bézier curve)
  const controlPoint1 = {
    x: start.x + (end.x - start.x) / 2,
    y: start.y,
  };
  const controlPoint2 = {
    x: start.x + (end.x - start.x) / 2,
    y: end.y,
  };

  // SVG Path data for a cubic Bézier curve
  const pathData = `M ${start.x},${start.y} C ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${end.x},${end.y}`;

  return (
    <svg className="absolute w-full h-full pointer-events-none">
      <path
        d={pathData}
        stroke={strokeColor}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default CurvyLine;
