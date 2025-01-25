import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import McAfeeLogo from "../assets/mcafee-logo.svg";
import SiteJabberLogo from "../assets/sitejobber.svg";
import bbblogo from "../assets/bbb.webp";

const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Links Section */}
                <div>
                    <h4 className="font-bold mb-4">Shop</h4>
                    <ul className="space-y-2">
                        {["Best Sellers", "New Arrivals", "Celebrity Scents", "Hard To Find", "Testers", "Travel Size Mini's", "Perfume Samples", "Cologne Samples", "Valentine's Day Gifts"].map(
                            (item, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">More Ways To Shop</h4>
                    <ul className="space-y-2">
                        {["Deodorant", "After Shave", "Shower Gel", "Body Cream", "Pure Perfume", "Body Lotions", "Gift Sets", "Top 100 Fragrances"].map(
                            (item, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Help</h4>
                    <ul className="space-y-2">
                        {["Order Status", "Shipping Info", "Return Info", "Contact Info", "About Us", "FAQ's", "Earn Rewards", "Join Coupon List"].map(
                            (item, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">More Help</h4>
                    <ul className="space-y-2">
                        {["Affiliates", "Wholesale Information", "Customer Testimonials", "Safe Shopping Guarantee", "Blog", "Privacy", "Site Map"].map(
                            (item, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            {/* McAfee - SiteJabber - BBB - Newsletter */}
            <div className="flex flex-wrap justify-evenly items-center text-white p-6 gap-8">
                {/* McAfee */}
                <div className="flex flex-col items-center">
                    <img
                        src={McAfeeLogo}
                        alt="McAfee Secure"
                        className="h-8"
                    />
                </div>

                {/* SiteJabber */}
                <div className="flex flex-col items-center">
                    <p className="text-yellow-400 font-semibold text-sm">
                        4.5 rating | 6,316 reviews
                    </p>
                    <img
                        src={SiteJabberLogo}
                        alt="Site Jabber"
                        className="h-6"
                    />
                </div>

                {/* BBB */}
                <div className="flex flex-col items-center">
                    <img
                        src={bbblogo}
                        alt="BBB Accredited"
                        className="h-8"
                    />
                </div>

                {/* Newsletter Subscription */}
                <div className="flex flex-col items-start text-gray-900 p-4 rounded-lg">
                    <h3 className="text-lg text-white font-bold mb-2">Join Our Coupon List</h3>
                    <p className="text-sm text-white mb-4">
                        Get the best deals and discounts on name brand fragrances and more.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
                        />
                        <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-none font-bold hover:bg-yellow-500">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>


            {/* Social Media Links */}
            <div className="bg-indigo-900 mt-4 py-4 text-center">
                <div className="flex justify-center gap-6 text-xl text-white">
                    <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
                    <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
                    <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
                    <FaPinterest className="hover:text-yellow-500 cursor-pointer" />
                    <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
                </div>
                <p className="text-sm mt-4">
                    Copyright © 2025 PerfumesFor'em. All Rights Reserved. | Last Updated January 22, 2025
                </p>
            </div>
        </footer>
    );
};

export default Footer;
