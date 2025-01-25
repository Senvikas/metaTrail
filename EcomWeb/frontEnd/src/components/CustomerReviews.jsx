import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // For arrows
import ReveiwIcon from "../assets/ReviewIcon.svg";
import HardToFindImg from "../assets/fx-hard-to-find.webp";
import CelebPerfume from "../assets/fx-celebrity-scents.webp";


const reviews = [
    {
        id: 1,
        text: "Yrr Vikas, mere liye Elizabeth Arden ka Green Tea perfume order kar do na 😄.",
        name: "Rishita",
    },
    {
        id: 2,
        text: "Lage rho chhote",
        name: "Aman",
    },
    {
        id: 3,
        text: "Main toh django ka use kr lunga",
        name: "Mahendra",
    },
    {
        id: 3,
        text: "Hnn toh vikas aap kya keh rahe the!!",
        name: "Parth",
    },
];

const staticCards = [
    {
        id: 1,
        image: HardToFindImg, //"/images/hard-to-find.jpg",
        link: "/hard-to-find",
        text: "Hard to Find Fragrances",
    },
    {
        id: 2,
        image: CelebPerfume, //"/images/celebrity-scents.jpg",
        link: "/celebrity-scents",
        text: "Celebrity Scents",
    },
];

const CustomerReviews = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handlePrev = () => {
        if (currentReviewIndex > 0) setCurrentReviewIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentReviewIndex < reviews.length - 1)
            setCurrentReviewIndex((prev) => prev + 1);
    };

    return (
        <div className="py-1 bg-indigo-50 dark:bg-gray-900 h-[50vh]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* Left Carousel */}
                <div className="col-span-2 bg-blue-100 dark:bg-gray-800 p-6 py-16 rounded-lg shadow-md relative overflow-hidden">
                    {/* Left Arrow */}
                    {currentReviewIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600"
                            style={{ zIndex: 10 }} // Ensure the button is on top
                        >
                            <AiOutlineLeft size={20} />
                        </button>
                    )}


                    {/* Entire Review Slider */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentReviewIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="flex-shrink-0 w-full flex flex-col items-center text-center"
                            >
                                <img
                                    src={ReveiwIcon}
                                    alt="Review Icon"
                                    className="mx-auto w-12 mb-4"
                                />
                                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 mb-4">
                                    "{review.text}"
                                </p>
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    {review.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    {currentReviewIndex < reviews.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            <AiOutlineRight size={20} />
                        </button>
                    )}

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full ${index === currentReviewIndex
                                    ? "bg-blue-500"
                                    : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>

                {/* Right Static Cards */}
                <div className="h-[100%]">
                    {staticCards.map((card) => (
                        <div
                            key={card.id}
                            className={`flex items-center dark:bg-gray-800 p-4 rounded-lg shadow-md`}
                            style={{
                                height: `${100 / staticCards.length}%`, // Dynamically calculate height
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.text}
                                className="w-16 h-16 bg-pink-100 object-contain rounded-lg mr-4"
                            />
                            <a
                                href={card.link}
                                className="text-lg font-semibold text-blue-900 hover:underline dark:text-yellow-400"
                            >
                                {card.text}
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
