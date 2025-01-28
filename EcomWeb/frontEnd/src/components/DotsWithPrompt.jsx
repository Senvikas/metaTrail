import React, { useState, useEffect } from "react";
import DotArrow from "./DotArrow";
import { motion } from "framer-motion";

const DotsWithPrompt = () => {
  const [animateFlow, setAnimateFlow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation status
  const [currentDotIndex, setCurrentDotIndex] = useState(null); // Track the currently animating dot/arrow
  const [activeStep, setActiveStep] = useState(null); // Track the currently clicked dot for prompt

  let animationInterval;

  const dotData = [
    { title: "Packets at IPD", description: "Packets are captured at IPD.", key: 1 },
    { title: "At IP Layer", description: "Extracts IP addresses from packets.", key: 2 },
    { title: "At TCP Layer", description: "Extracts ports and MAC addresses.", key: 3 },
    { title: "At Application Layer", description: "Identifies applications from packets.", key: 4 },
    { title: "Final Layer", description: "Processes like Fingerprinting occur here.", key: 5 },
  ];

  // Function to start the animation
  const startAnimation = () => {
    setIsAnimating(true);
    setAnimateFlow(true); // Trigger the animation
    setCurrentDotIndex(0); // Start from the first dot
  };

  // Function to stop the animation
  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimateFlow(false); // Stop animation
    clearInterval(animationInterval); // Clear the interval
    setCurrentDotIndex(null); // Reset the current dot index
  };

  useEffect(() => {
    if (isAnimating) {
      // Set up interval for continuous animation
      animationInterval = setInterval(() => {
        setCurrentDotIndex((prevIndex) =>
          prevIndex === dotData.length - 1 ? 0 : prevIndex + 1
        ); // Cycle through dots
      }, 1500); // Adjust interval duration to match your animation cycle
    }

    return () => clearInterval(animationInterval); // Cleanup interval on unmount
  }, [isAnimating]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white shadow-md">
        <h1 className="text-xl font-bold">MetaTrail Flow</h1>
        <div>
          <button
            onClick={startAnimation}
            className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 transition mr-4"
          >
            Start Flow
          </button>
          <button
            onClick={stopAnimation}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
          >
            Stop Flow
          </button>
        </div>
      </div>

      {/* Dots with Animation */}
      <div className="flex flex-wrap items-center justify-center h-[calc(100vh-64px)] px-4">
        {dotData.map((dot, index) => (
          <motion.div
            key={dot.key}
            initial={{ opacity: 0.4, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: currentDotIndex === index ? 1.2 : 1, // Scale active dot
            }}
            transition={{
              duration: 0.5,
            }}
            className="m-4 cursor-pointer"
            onClick={() => setActiveStep(dot)} // Set the clicked dot as the active step
          >
            <DotArrow
              title={dot.title}
              circleSize={120}
              bgColor="bg-teal-500"
              textColor="text-white"
              arrowLength={120}
              arrowColor="blue"
              activeArrowColor="red" // Add active color for gradual fill
              isActive={currentDotIndex === index} // Pass the active state
              arrowWidth={3}
              arrowDirection="right"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for Active Step */}
      {activeStep && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full"
          >
            <h2 className="text-xl font-bold mb-4">{activeStep.title}</h2>
            <p>{activeStep.description}</p>
            <button
              className="mt-6 bg-teal-500 text-white px-4 py-2 rounded shadow"
              onClick={() => setActiveStep(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DotsWithPrompt;
