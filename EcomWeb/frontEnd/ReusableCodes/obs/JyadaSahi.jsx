import React, { useState } from "react";
import DotArrow from "./DotArrow";
import { motion } from "framer-motion";
import dotData from "./ConfigureDots"; // Import dotData from ConfigureDots.js
import { useDotAnimation } from "./AnimationUtils"; // Import animation logic

import ExamplePage from "./ExamplePage";

const DotsWithNavbar = () => {
    const [activeStep, setActiveStep] = useState(null);
    const { isAnimating, currentDotIndex, startAnimation, stopAnimation } = useDotAnimation(dotData.length); // Use animation hook

    return (
        <div className="relative h-[100vh] bg-violet-300 mb-8">
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
            <div className=" flex flex-col "> 
            <div className="flex flex-wrap justify-center items-center h-[calc(100vh-64px)] px-4">
                {dotData.map((dot, index) => (
                    <motion.div
                        key={dot.key}
                        initial={{ opacity: 0.4, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: currentDotIndex === index ? 1.5 : 1, // Scale active dot
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={`ml-${index === 0 ? "0" : "[140px]"}`}
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

            <div>
                <ExamplePage />
            </div>

            </div>

        </div>
    );
};

export default DotsWithNavbar;
