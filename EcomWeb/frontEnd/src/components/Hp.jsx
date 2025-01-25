import React from "react";

const Hp = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Mind Map Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Dots */}
        <div className="relative">
          {/* Line Paths */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curvy Lines */}
            <path
              d="M20% 50% C40% 30%, 60% 70%, 80% 50%"
              stroke="black"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>

          {/* Dot 1 */}
          <div
            className="relative top-[40%] left-[20%] w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer"
            title="Home"
          ></div>

          <div
            className="relative top-[70%] left-[20%] w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer"
            title="Home"
          ></div>

          {/* Dot 2 */}
          <div
            className="relative top-[30%] left-[50%] w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"
            title="Shop"
          ></div>

          {/* Dot 3 */}
          <div
            className="absolute top-[50%] left-[80%] w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"
            title="About Us"
          ></div>

          <div
            className="reltive top-[230%] left-[80%] w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"
            title="About Us"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hp;
