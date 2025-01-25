import React, { useState, useEffect } from "react";
import homeImage from "../assets/homeimage_desktop@2x.webp";
import homeImage2 from "../assets/homeimage_desktop@2x_2.webp";
import safeSecureImage from "../assets/safesecure.svg";
import autheniticImage from "../assets/authentic.svg";
import shipSameDayImage from "../assets/fastfreeshipping.svg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(homeImage);

  useEffect(() => {
    const images = [homeImage, homeImage2];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Loop through images
      setCurrentImage(images[currentIndex]);
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[84vh] w-screen -mx-4 p-0 m-0 -mt-4"
      style={{
        backgroundImage: `url(${currentImage})`,
        transition: "background-image 2s ease-in-out", // Add smooth transition
      }}
    >
      <div className="text-center py-12 px-8 sm:px-16 max-w-screen-lg mx-auto flex flex-col gap-20">
        {/* Tag line */}
        <div className="flex flex-col gap-4 pt-4 px-6">
          <h1 className="text-6xl font-bold mb-4">Unwrap the World of Fragrance</h1>
          <p className="text-lg text-gray-600 px-20 mb-6">
            PerfumesFor'em brings you an exquisite collection of fragrances for every mood and occasion.
          </p>
        </div>
        {/* Tag line */}

        {/* Buttons for Shopping */}
        <div className="flex flex-col gap-2 px-6">
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded hover:bg-blue-700">
              SHOP ALL PERFUMES →
            </button>
            <button className="px-10 py-4 bg-blue-800 text-white font-semibold rounded hover:bg-blue-700">
              SHOP ALL COLOGNES →
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-800">
            <p>Free Shipping</p>
          </div>
        </div>
        {/* Buttons for Shopping */}
      </div>

      {/* Safe-Secure, Authentic, Same-Day Shipping */}
      <div className="mt-12 flex justify-evenly gap-6">
        {/* Safe & Secure Checkout */}
        <div className="flex">
          <img src={safeSecureImage} alt="Safe & Secure" className="w-16 h-16 mb-4" />
          <h3 className="font-bold text-lg w-32">Safe & Secure Checkout</h3>
        </div>

        {/* 100% Authentic Fragrances */}
        <div className="flex">
          <img src={autheniticImage} alt="Authentic Fragrances" className="w-16 h-16 mb-4" />
          <h3 className="font-bold text-lg w-36">100% Authentic Fragrances</h3>
        </div>

        {/* Items Ship Same Day */}
        <div className="flex">
          <img src={shipSameDayImage} alt="Same Day Shipping" className="w-16 h-16 mb-4" />
          <h3 className="font-bold text-lg w-32">Items Ship Same Day</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
