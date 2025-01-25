import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
