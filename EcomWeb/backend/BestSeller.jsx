import React, { useState, useEffect } from "react";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]); // State to store product data

  // Simulate a fetch from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/best-sellers"); // Replace with your backend endpoint
        const data = await response.json();
        setBestSellers(data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-8 bg-indigo-50 dark:bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Best Sellers
        </h2>
        <a
          href="/all-products"
          className="text-blue-500 hover:underline dark:text-yellow-400 text-sm"
        >
          See All
        </a>
      </div>

      {/* Grid of Best Sellers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border dark:border-gray-700 hover:shadow-lg transition duration-300"
          >
            {/* Image with Faded Background */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-50 rounded-lg"></div>
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full h-48 object-contain rounded-lg"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center mb-1">
              {product.name}
            </h3>

            {/* Product Brand */}
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {product.brand}
            </p>

            {/* Product Price */}
            <p className="text-sm text-gray-800 dark:text-gray-100 text-center mt-1 font-medium">
              As low as {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
