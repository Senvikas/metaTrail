// animationUtils.js

import { useEffect, useState } from "react";

export const useDotAnimation = (dotDataLength) => {
  const [isAnimating, setIsAnimating] = useState(false); // Track animation status
  const [currentDotIndex, setCurrentDotIndex] = useState(null); // Track the currently animating dot/arrow

  let animationInterval;

  // Function to start the animation
  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentDotIndex(0); // Start from the first dot
  };

  // Function to stop the animation
  const stopAnimation = () => {
    setIsAnimating(false);
    clearInterval(animationInterval); // Clear the interval
    setCurrentDotIndex(null); // Reset the current dot index
  };

  useEffect(() => {
    if (isAnimating) {
      // Set up interval for continuous animation
      animationInterval = setInterval(() => {
        setCurrentDotIndex((prevIndex) =>
          prevIndex === dotDataLength - 1 ? 0 : prevIndex + 1
        ); // Cycle through dots
      }, 3000); // Adjust interval duration to match your animation cycle
    }

    return () => clearInterval(animationInterval); // Cleanup interval on unmount
  }, [isAnimating, dotDataLength]);

  return { isAnimating, currentDotIndex, startAnimation, stopAnimation };
};
