import React, { useState, useEffect } from "react";
import DotArrow from "./DotArrow";
import { motion } from "framer-motion";
import dotDataEP from "./ConfigureEPDots";
import { useDotAnimation } from "./AnimationUtils"; // Import animation logic

const Fip = () => {
  const [activeStep, setActiveStep] = useState(null); // State for active modal step
  const { isAnimating, currentDotIndex, startAnimation, stopAnimation } =
    useDotAnimation(dotDataEP.length); // Use animation hook

  // Automatically open/close modals during animation
  useEffect(() => {
    if (isAnimating && currentDotIndex !== null) {
      setActiveStep(dotDataEP[currentDotIndex]); // Open modal for current dot
    } else {
      setActiveStep(null); // Close modal when animation stops
    }
  }, [isAnimating, currentDotIndex]);

  // Toggle animation logic
  const toggleAnimation = () => {
    if (isAnimating) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  return (
    <div className="relative h-[100vh] bg-gradient-to-r from-custom-black to-custom-gray mb-8">
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-custom-black to-custom-gray text-white ">
                {/* <h1 className="text-xl font-bold">MetaTrail Flow</h1> */}
                <div className="opacity-0">
                    <button accessKey="s"
                        onClick={toggleAnimation}
                        className={`px-4 py-2 border-none text-black bg-transparent ${isAnimating
                                // ? "bg-red-500 hover:bg-red-600"
                                // : "bg-gradient-to-r from-custom-black to-custom-gray hover:bg-teal-600"
                            } rounded transition`}
                    >
                        {isAnimating ? "Stop Flow" : "Start Flow"}
                    </button>
                </div>
            </div>

      {/* Dots with Animation */}
      <div className="flex flex-wrap justify-center py-20 h-[calc(100vh-64px)] px-4">
      {dotDataEP.map((dot, index) => (
  <motion.div
    key={dot.key}
    initial={{ opacity: 0.4, scale: 0.8 }}
    animate={{
      opacity: currentDotIndex === index || activeStep === dot ? 1.2 : 0.9, // Increase opacity for active or clicked dot
      scale: currentDotIndex === index || activeStep === dot ? 1.3 : 1, // Scale active or clicked dot
    }}
    transition={{
      duration: 0.5,
    }}
    className={`ml-${index === 0 ? "0" : "[140px]"}`}
  >
    <div className="rounded-full shadow-[0_0_20px_4px_rgba(255,251,166,0.5)]">
      <DotArrow
        dotlength={dotDataEP.length}
        ind={dotDataEP.length-1}
        title={dot.title}
        circleSize={120}
        bgColor="bg-yellow-500"
        textColor="text-white"
        arrowLength={120}
        arrowColor="grey"
        activeArrowColor="white" // Add active color for gradual fill
        isActive={currentDotIndex === index} // Pass the active state
        arrowWidth={3}
        arrowDirection="right"
        onClick={() => setActiveStep(dot)} // Set the clicked dot as the active step
      />
    </div>
  </motion.div>
))}


        {/* Modal for Active Step */}
        {activeStep && (
          <div className="fixed inset-0 bg-opacity-5 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0.6, opaciy: 0 }}
              className="text-white p-1 rounded-lg"
              style={{
                width: "50rem", // Set the width for 1.5x aspect ratio
                height: "22rem", // Set the height for 1x aspect ratio
                marginTop: "15rem", // Ensure the prompt is below the circles
              }}
            >
                <button
                      className="bg-transparent text-white px-4 py-2 rounded shadow"
                      onClick={() => setActiveStep(null)}
                  >
                      
                  </button>
              <img
                className="bg-yellow-600 rounded-lg object-fill"
                src={activeStep.myImg}
                alt={activeStep.title || "Image"}
                style={{
                  height: "100%", // Ensure the height scales to 40% of the parent
                  width: "100%", // Ensure the width scales to 50% of the parent
                  maxHeight: "100%", // Prevent overflow beyond parent height
                  maxWidth: "100%", // Prevent overflow beyond parent width
                  marginBottom: "2rem",
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fip;
