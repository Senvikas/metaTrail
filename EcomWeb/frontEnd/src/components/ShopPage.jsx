import React from "react";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { type } = useParams(); // Access the dynamic parameter (e.g., "testers")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 capitalize">
          {type}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Welcome to the {type} page!
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
