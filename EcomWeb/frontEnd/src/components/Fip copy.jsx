import React, { useState, useEffect } from "react";
import DotArrow from "./DotArrow";
import { motion } from "framer-motion";
import dotDataFip from "./ConfigureFipDots";
import { useDotAnimation } from "./AnimationUtils"; // Import animation logic

const Fip = () => {
    const [activeStep, setActiveStep] = useState(null); // State for active modal step
    const { isAnimating, currentDotIndex, startAnimation, stopAnimation } =
        useDotAnimation(dotDataFip.length); // Use animation hook

    // Automatically open/close modals during animation
    useEffect(() => {
        if (isAnimating && currentDotIndex !== null) {
            setActiveStep(dotDataFip[currentDotIndex]); // Open modal for current dot
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
            {/* <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-custom-black to-custom-gray text-white ">
                <h1 className="text-xl font-bold">MetaTrail Flow</h1>
                <div>
                    <button
                        onClick={toggleAnimation}
                        className={`px-4 py-2 ${isAnimating
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-gradient-to-r from-custom-black to-custom-gray hover:bg-teal-600"
                            } rounded transition`}
                    >
                        {isAnimating ? "Stop Flow" : "Start Flow"}
                    </button>
                </div>
            </div> */}

            {/* Dots with Animation */}
            <div className="flex flex-wrap justify-center py-20 h-[calc(100vh-64px)] px-4">
                {dotDataFip.map((dot, index) => (
                    <motion.div
                        key={dot.key}
                        initial={{ opacity: 0.4, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: currentDotIndex === index ? 1.2 : 1, // Scale active dot
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className={`ml-${index === 0 ? "0" : "[140px]"}`}
                    >
                        <div className="rounded-full shadow-[0_0_20px_4px_rgba(255,251,166,0.5)]">
                            <DotArrow
                                dotlength={dotDataFip.length}
                                ind={index}
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
                            className="bg-custom-gray text-white p-1 rounded-lg "
                            style={{
                                width: "50rem", // Set the width for 1.5x aspect ratio
                                height: "22rem", // Set the height for 1x aspect ratio
                                marginTop: "15rem", // Ensure the prompt is below the circles
                            }}
                        >
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold mb-4 ml-4 text-center">
                                    {activeStep.title}
                                </h2>
                                {/* Close Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="bg-custom-gray text-white px-3 py-1 h-8 mr-4 text-xs rounded"
                                        onClick={() => setActiveStep(null)} // Manually close the modal
                                    >
                                        X
                                    </button>
                                </div>
                            </div>

                            <p className="text-lg text-center mb-1">
                                {activeStep.description}
                            </p>

                            {/* Image */}
                            <div className="flex justify-center items-center w-full h-full overflow-hidden mb-2">
    <img
        className="border-gray-950 bg-black object-fill"
        src={activeStep.myImg}
        alt={activeStep.title || "Image"}
        style={{
            height: "60%", // Ensure the height scales to 40% of the parent
            width: "100%", // Ensure the width scales to 50% of the parent
            maxHeight: "100%", // Prevent overflow beyond parent height
            maxWidth: "100%", // Prevent overflow beyond parent width
            marginBottom: "2rem",
        }}
    />
</div>


                            {/* Close Button */}
                            {/* <div className="flex justify-center ">
                            <button
                                className="bg-teal-500 text-white px-6 py-3 rounded shadow"
                                onClick={() => setActiveStep(null)} // Manually close the modal
                            >
                                Close
                            </button>
                        </div> */}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Fip;
