import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ({ isAnimating, toggleAnimation, handleShowFip }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-custom-black to-custom-gray text-white ">
      <Link to="/"  className="text-white hover:text-white">
      <h1 className="text-xl font-bold">MetaTrail Flow</h1>
      </Link>
      <div>
        {/* <button
          onClick={toggleAnimation}
          className={` ${isAnimating
            // ? "bg-red-500 hover:bg-red-600"
            // : "bg-gradient-to-r from-custom-black to-custom-gray hover:bg-teal-600"
            } rounded transition bg-transparent`}
        >
          {isAnimating ? "Stop Flow" : "Start Flow"}
        </button> */}
        <button
          onClick={handleShowFip}
          // className="px-4 py-2 ml-4 bg-purple-500 rounded hover:bg-purple-600 transition"
          className="transition bg-transparent"
        >
          <a href="/Fip" className="no-underline text-inherit bg-transparent">
            FIP
          </a>

        </button>

        <button
          onClick={handleShowFip}
          // className="px-4 py-2 ml-4 bg-purple-500 rounded hover:bg-purple-600 transition"
          className="transition bg-transparent"
        >
          <a href="/Fop" className="no-underline text-inherit bg-transparent">
            FOP
          </a>

        </button>
        <button
          onClick={handleShowFip}
          // className="px-4 py-2 ml-4 bg-purple-500 rounded hover:bg-purple-600 transition"
          className="transition bg-transparent"
        >
          <a href="/CA" className="no-underline text-inherit bg-transparent">
            CA
          </a>

        </button>
        <button
          onClick={handleShowFip}
          // className="px-4 py-2 ml-4 bg-purple-500 rounded hover:bg-purple-600 transition"
          className="transition bg-transparent"
        >
          <a href="/Comp_App" className="no-underline text-inherit bg-transparent">
            Comp App
          </a>

        </button>
      </div>
    </div>
  );
};

export default Navbar;
