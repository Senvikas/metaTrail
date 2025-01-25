import React from "react";
import FreeShippingIcon from "../assets/fastfreeshipping.svg";
import TrustedIcon from "../assets/authentic.svg";
import SecureCheckoutIcon from "../assets/safesecure.svg";
import StarRatingIcon from "../assets/fivestar.svg";

const XFactorSection = () => {
    const features = [
        {
            id: 1,
            icon: FreeShippingIcon,
            title: "Same Day Free Shipping",
            description: "Orders ship on the day that you place them and arrive within days.",
        },
        {
            id: 2,
            icon: TrustedIcon,
            title: "Trusted since 2001",
            description: "100% authentic fragrances. You won't find knockoffs or imitations here.",
        },
        {
            id: 3,
            icon: SecureCheckoutIcon,
            title: "Safe & Secure Checkout",
            description: "100% safe and secure checkout. Your information is protected.",
        },
        {
            id: 4,
            icon: StarRatingIcon,
            title: "5 Star Customer Ratings",
            description: "Over 20 million satisfied customers.",
        },
    ];

    return (
        // bg-indigo-50
        <section className="py-8 dark:bg-gray-900">
            {/* Section Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">The x Factor</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">The FragranceX Difference</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-screen-xl mx-auto">
                {features.map((feature) => (
                    <div key={feature.id} className="flex flex-col items-center text-center">
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default XFactorSection;
