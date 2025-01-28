Sure! Here's a reusable **dot component** that you can use throughout your application. This component will be customizable, so you can easily set properties like size, color, title, description, and any animations.

### **Usage of the Dot Component**
You can now import and reuse this `Dot` component in multiple places, passing different properties to customize it.

#### Example of Usage in `L1`:
```jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Dot from "./Dot"; // Import the reusable Dot component

const flowSteps = [
  { id: 1, title: "IPD", description: "Packets are captured at the initial stage." },
  { id: 2, title: "IP Layer", description: "Extracts IP addresses from the packets." },
  { id: 3, title: "TCP Layer", description: "Extracts ports and MAC addresses." },
  { id: 4, title: "Application Layer", description: "Identifies the application from the data." },
];

function L1() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">MetaTrail Packet Flow</h1>
      <div className="relative w-full max-w-4xl flex flex-wrap justify-center items-center">
        {/* Render Dots */}
        {flowSteps.map((step) => (
          <Dot
            key={step.id}
            title={step.title}
            description={step.description}
            onClick={() => setActiveStep(step)} // Set the active step on click
            size={60} // Example size in pixels
            bgColor="bg-teal-500" // Example background color
            textColor="text-white" // Example text color
          />
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
}

export default L1;
```

---

### **Benefits of Reusable Dot Component**
1. **Customizable**: You can set the size, colors, and animations individually for each dot.
2. **Reusability**: Use the same component in multiple locations with different props.
3. **Separation of Concerns**: Keeps your code clean and modular.

Would you like to add more features to the `Dot` component (e.g., tooltips or animations)? Let me know! 😊