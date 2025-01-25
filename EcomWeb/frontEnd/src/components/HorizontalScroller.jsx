import React, { useRef } from "react";

const HorizontalScroller = ({ children }) => {
  const scrollContainerRef = useRef(null);

  // Add horizontal scrolling via touchpad or mousewheel
  const handleScroll = (event) => {
    event.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto whitespace-nowrap scroll-smooth"
      onWheel={handleScroll}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar (Firefox/IE)
    >
      <div className="flex">{children}</div>
    </div>
  );
};

export default HorizontalScroller;
