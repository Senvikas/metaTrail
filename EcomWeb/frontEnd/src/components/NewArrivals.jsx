import React, { useState } from "react";
import armafImage from "../assets/Brands/armaf.webp";
import DGImage from "../assets/Brands/DG.webp";
import CKImage from "../assets/Brands/ck.webp";
import Versace from "../assets/Brands/versace.webp";

const bestSellers = [
  {
    id: 1,
    name: "Viva La Juicy",
    brand: "By Armaf",
    price: "₹ 4,679.32",
    image: armafImage,
  },
  {
    id: 2,
    name: "Pink Sugar",
    brand: "By D&G",
    price: "₹ 257.55",
    image: DGImage,
  },
  {
    id: 3,
    name: "Euphoria",
    brand: "By Calvin Klein",
    price: "₹ 1,808.74",
    image: CKImage,
  },
  {
    id: 4,
    name: "Red Door",
    brand: "By Elizabeth Arden",
    price: "₹ 747.63",
    image: Versace,
  },
  {
    id: 5,
    name: "New Product 1",
    brand: "By Brand 1",
    price: "₹ 1,234.56",
    image: armafImage,
  },
  {
    id: 6,
    name: "New Product 2",
    brand: "By Brand 2",
    price: "₹ 2,345.67",
    image: DGImage,
  },
  {
    id: 7,
    name: "New Product 3",
    brand: "By Brand 3",
    price: "₹ 3,456.78",
    image: CKImage,
  },
  {
    id: 8,
    name: "New Product 4",
    brand: "By Brand 4",
    price: "₹ 4,567.89",
    image: Versace,
  },
  {
    id: 6,
    name: "New Product 2",
    brand: "By Brand 2",
    price: "₹ 2,345.67",
    image: DGImage,
  },
  {
    id: 7,
    name: "New Product 3",
    brand: "By Brand 3",
    price: "₹ 3,456.78",
    image: CKImage,
  },
  {
    id: 8,
    name: "New Product 4",
    brand: "By Brand 4",
    price: "₹ 4,567.89",
    image: Versace,
  },
  {
    id: 1,
    name: "Viva La Juicy",
    brand: "By Armaf",
    price: "₹ 4,679.32",
    image: armafImage,
  },
  {
    id: 2,
    name: "Pink Sugar",
    brand: "By D&G",
    price: "₹ 257.55",
    image: DGImage,
  },
  {
    id: 3,
    name: "Euphoria",
    brand: "By Calvin Klein",
    price: "₹ 1,808.74",
    image: CKImage,
  },
  {
    id: 4,
    name: "Red Door",
    brand: "By Elizabeth Arden",
    price: "₹ 747.63",
    image: Versace,
  },
  {
    id: 5,
    name: "New Product 1",
    brand: "By Brand 1",
    price: "₹ 1,234.56",
    image: armafImage,
  },
  {
    id: 6,
    name: "New Product 2",
    brand: "By Brand 2",
    price: "₹ 2,345.67",
    image: DGImage,
  },
  {
    id: 7,
    name: "New Product 3",
    brand: "By Brand 3",
    price: "₹ 3,456.78",
    image: CKImage,
  },
  {
    id: 8,
    name: "New Product 4",
    brand: "By Brand 4",
    price: "₹ 4,567.89",
    image: Versace,
  },
  {
    id: 6,
    name: "New Product 2",
    brand: "By Brand 2",
    price: "₹ 2,345.67",
    image: DGImage,
  },
  {
    id: 7,
    name: "New Product 3",
    brand: "By Brand 3",
    price: "₹ 3,456.78",
    image: CKImage,
  },
  {
    id: 8,
    name: "New Product 4",
    brand: "By Brand 4",
    price: "₹ 4,567.89",
    image: Versace,
  },
];

const BestSellers = () => {
  const itemsPerFrame = 4; // Number of items shown in one frame
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage the current visible slide

  const maxIndex = Math.ceil(bestSellers.length / itemsPerFrame) - 1; // Calculate the max index for navigation

  const handleNext = () => {
    // Move to the next frame if there are more items
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    // Move to the previous frame if not at the beginning
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="py-8 bg-indigo-50 dark:bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          New Arrivals
        </h2>
        <a
          href="/all-products"
          className="text-blue-500 hover:underline dark:text-yellow-400 text-sm"
        >
          See All
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          >
            &lt;
          </button>
        )}

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full sm:w-[50%] lg:w-[25%] p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border dark:border-gray-700 hover:shadow-lg transition duration-300"
              >
                {/* Image with Faded Background */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-50 rounded-lg"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-36 object-contain rounded-lg"
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

        {/* Right Arrow */}
        {currentIndex < maxIndex && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default BestSellers;
