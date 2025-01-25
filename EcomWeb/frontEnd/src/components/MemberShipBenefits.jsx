import React from "react";
import EarnPointsIcon from "../assets/earn-points-icon.svg"; // Replace with actual path
import WholesaleIcon from "../assets/wholesale-icon.svg"; // Replace with actual path

const MembershipBenefits = () => {
  return (
    <div className="py-8 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

        {/* Card 1 */} {/* scale-110 */}
        <div className="flex flex-row bg-indigo-50 items-center dark:bg-gray-800 shadow rounded-lg p-8 gap-8 transform">
          {/* left */}
          <img
            src={EarnPointsIcon} // Correctly use the imported icon
            alt="Earn Points Icon"
            className="w-28 h-28"
          />
          {/* right */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 dark:text-gray-100 mb-4">
              Earn points. Save money.
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-center font-semibold">
              Earn one point for every dollar you spend with us and start saving on all future purchases.
            </p>
            <button
              onClick={() => alert("Button Clicked!")} // Replace with actual functionality
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600"
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Card 2 */} {/* scale-110 */}
        <div className="flex flex-row bg-indigo-50 items-center dark:bg-gray-800 shadow rounded-lg p-8 gap-8 transform">
          {/* left */}
          <img
            src={WholesaleIcon} // Correctly use the imported icon
            alt="Reseller Icon"
            className="w-28 h-28"
          />
          {/* right */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 dark:text-gray-100 mb-4">
              Reseller? Buy Wholesale Perfume
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-center font-semibold">
              If you have a store or sell perfume online, register to buy wholesale perfume.
            </p>
            <button
              onClick={() => alert("Button Clicked!")} // Replace with actual functionality
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600"
            >
              Register Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default MembershipBenefits;
