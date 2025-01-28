import React from "react";
import Dot from "./Dot";
import CurvyLine from "./CurvyLine";

const DotWithCurvyLine = ({
  start,
  end,
  dot1Props,
  dot2Props,
  lineProps,
}) => {
  return (
    <div className="relative w-full h-full">
      {/* First Dot */}
      <div
        className="absolute"
        style={{ top: start.y, left: start.x }}
      >
        <Dot {...dot1Props} />
      </div>

      {/* Second Dot */}
      <div
        className="absolute"
        style={{ top: end.y, left: end.x }}
      >
        <Dot {...dot2Props} />
      </div>

      {/* Curvy Line Connecting the Dots */}
      <CurvyLine start={start} end={end} {...lineProps} />
    </div>
  );
};

export default DotWithCurvyLine;
