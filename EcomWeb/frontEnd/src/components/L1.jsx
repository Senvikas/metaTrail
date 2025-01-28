import React, { useState } from "react";
import { motion } from "framer-motion";

const flowSteps = [
  { id: 1, title: "Packets come at IPD", description: "Packets are captured at the initial stage." },
  { id: 2, title: "At IP Layer", description: "Extracts IP addresses from the packets." },
  { id: 3, title: "TCP Layer", description: "Extracts ports and MAC addresses." },
  { id: 4, title: "Application Layer", description: "Identifies the application from the data." },
  { id: 5, title: "Upper Layer", description: "Processes start: FingerPrinting, FootPrinting, etc." },
  { id: 6, title: "FingerPrinting", description: "Creates unique identifiers for entities." },
  { id: 7, title: "FootPrinting", description: "Traces the path and origins of communication." },
  { id: 8, title: "Entity Profiling", description: "Categorizes entities from packet data." },
  { id: 9, title: "Connection Analysis", description: "Analyzes connections and relationships." },
];

function L1() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">MetaTrail Packet Flow</h1>
      <div className="relative w-full max-w-4xl flex flex-wrap justify-center items-center">
        {/* Render flow steps */}
        {flowSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveStep(step)}
            className="bg-teal-500 text-center text-sm font-semibold rounded-full w-32 h-32 flex items-center justify-center m-4 cursor-pointer shadow-lg"
          >
            {step.title}
          </motion.div>
        ))}
        {/* Arrows */}
        <motion.div
          className="absolute w-2 bg-white h-16 top-24 left-32"
          animate={{ opacity: 1 }}
        />
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
}

export default L1;
