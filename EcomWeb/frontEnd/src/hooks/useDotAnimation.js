import { useState, useEffect } from "react";

export const useDotAnimation = (dotCount) => {
    const [currentDotIndex, setCurrentDotIndex] = useState(null); // Current active dot index
    const [isAnimating, setIsAnimating] = useState(false);

    // Start the animation
    const startAnimation = () => {
        setIsAnimating(true);
        setCurrentDotIndex(0); // Start from the first dot
    };

    // Stop the animation
    const stopAnimation = () => {
        setIsAnimating(false);
        setCurrentDotIndex(null); // Reset the active dot
    };

    // Handle animation cycle
    useEffect(() => {
        if (isAnimating) {
            const interval = setInterval(() => {
                setCurrentDotIndex((prevIndex) =>
                    prevIndex === dotCount - 1 ? 0 : prevIndex + 1
                );
            }, 1000); // Adjust the duration as needed

            return () => clearInterval(interval); // Cleanup on stop
        }
    }, [isAnimating, dotCount]);

    return {
        currentDotIndex,
        isAnimating,
        startAnimation,
        stopAnimation,
    };
};
