import React from "react";
import { BsFillDropletFill, BsBagFill, BsGiftFill, BsFillSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    icon: <BsFillDropletFill className="text-blue-500 text-5xl" />, // React-icons component
    title: "Testers",
    description: "Full-size products without the fancy packaging",
  },
  {
    id: 2,
    icon: <BsBagFill className="text-blue-500 text-5xl" />,
    title: "Travel Size",
    description: "Travel-sized scents, perfect for on-the-go",
  },
  {
    id: 3,
    icon: <BsGiftFill className="text-blue-500 text-5xl" />,
    title: "Gift Sets",
    description: "Beautifully packaged sets that make for a perfect gift",
  },
  {
    id: 4,
    icon: <BsFillSquareFill className="text-blue-500 text-5xl" />,
    title: "Samples",
    description: "Discover your perfect match with samples",
  },
];

const CardGrid = () => {
  return (
    <div className="py-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Shop By Type
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {cardData.map((card) => (
          // One Cell
          <Link
            key={card.id}
            to={`/shop/${card.title.toLowerCase().replace(/\s+/g, "-")}`} // Dynamic link
          >
            <div
              className="p-6 flex flex-col justify-center items-center dark:bg-gray-800 shadow-md rounded-lg border dark:border-gray-700 hover:shadow-lg transition duration-300 h-[40vh]"
            >
              {/* Icon */}
              <div className="mb-4">
                {React.cloneElement(card.icon, {
                  className: "text-[8vw] text-blue-500 dark:text-yellow-300",
                })}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center hover:underline hover:text-blue-500 dark:hover:text-yellow-400 underline">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-m text-gray-600 dark:text-gray-300 text-center">
                {card.description}
              </p>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default CardGrid;
