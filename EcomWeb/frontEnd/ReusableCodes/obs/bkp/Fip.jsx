import React, { useState } from "react";
import DotArrow from "./DotArrow";
import { motion } from "framer-motion";
import dotDataFip from "./ConfigureFipDots";
import { useDotAnimation } from "./AnimationUtils"; // Import animation logic

const Fip = () => {
    const [activeStep, setActiveStep] = useState(null);
    const { isAnimating, currentDotIndex, startAnimation, stopAnimation } = useDotAnimation(dotDataFip.length); // Use animation hook

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
                <h1 className="text-xl font-bold">MetaTrail Flow</h1>
                <div>
                    <button
                        onClick={toggleAnimation}
                        className={`px-4 py-2 ${
                            isAnimating ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-custom-black to-custom-gray hover:bg-teal-600"
                        } rounded transition`}
                    >
                        {isAnimating ? "Stop Flow" : "Start Flow"}
                    </button>
                </div>
            </div>

            {/* Dots with Animation */}
            <div className="flex flex-wrap justify-center items-center h-[calc(100vh-64px)] px-4">
                {dotDataFip.map((dot, index) => (
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
                        className={`ml-${index === 0 ? "0" : "[140px]"}`}
                    >
                        <DotArrow
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
                    </motion.div>
                ))}

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
        </div>
    );
};

export default Fip;
