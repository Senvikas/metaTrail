import React from "react";
import armafImage from "../assets/Brands/armaf.webp";
import DGImage from "../assets/Brands/DG.webp"
import CKImage from "../assets/Brands/ck.webp"
import Versace from "../assets/Brands/versace.webp"

// Example data for brands
const brandData = [
    {
        id: 1,
        name: "Armaf",
        image: armafImage, // Replace with the correct image path
        productCount: 62,
    },
    {
        id: 2,
        name: "Dolce & Gabbana",
        image: DGImage,
        productCount: 38,
    },
    {
        id: 3,
        name: "Calvin Klein",
        image: CKImage,
        productCount: 49,
    },
    {
        id: 4,
        name: "Versace",
        image: Versace,
        productCount: 29,
    },

];

const BrandGrid = () => {
    return (
        <div className="py-8 bg-indigo-50 dark:bg-gray-900">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                Top Brands
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                <a
                    href="/all-brands"
                    className="text-blue-500 hover:underline dark:text-yellow-400"
                >
                    View All Brands
                </a>
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-28 ">
                {brandData.map((brand) => (
                    <div
                        key={brand.id}
                        className="h-[60vh] p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col items-center border dark:border-gray-700 hover:shadow-lg transition duration-300"
                    >
                        {/* Image */}
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-[70%] h-[70%] object-cover rounded-lg mx-auto mt-4"
                        />

                        {/* Brand Name - Clickable but No Underline */}
                        {/* Brand Name - Clickable but No Underline */}
                        <h3 className="text-lg font-bold text-black dark:text-gray-100 mb-2">
                            <a
                                href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="hover:text-blue-500 dark:hover:text-yellow-400 transition"
                                style={{ textDecoration: "none" }} // Explicitly remove underline if applied by default
                            >
                                {brand.name}
                            </a>
                        </h3>


                        {/* Product Count - Clickable and Underlined */}
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            <a
                                href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="underline hover:text-blue-500 dark:hover:text-yellow-400 transition"
                            >
                                {brand.productCount} Products
                            </a>
                        </p>
                    </div>


                ))}
            </div>


        </div>
    );
};

export default BrandGrid;
