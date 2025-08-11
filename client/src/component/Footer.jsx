import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-36 py-10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Left: Logo and description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={assets.logo} alt="logo" className="w-40 mb-4" />
          <p className="text-gray-400 text-sm max-w-sm">
            QuickShow is your gateway to the latest movies and theater
            experiences. Book your favorite shows anytime, anywhere.
          </p>
        </div>

        {/* Middle: Navigation links */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/movies" className="text-gray-300 hover:text-white transition">Movies</Link>
          <Link to="/favorite" className="text-gray-300 hover:text-white transition">Favorites</Link>
          <Link to="/" className="text-gray-300 hover:text-white transition">Theaters</Link>
        </div>

        {/* Right: Download buttons */}
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold mb-2">Download App</h3>
          <div className="flex gap-3">
            <img src={assets.googlePlay} alt="Play Store" className="w-32 cursor-pointer hover:opacity-80 transition" />
            <img src={assets.appStore} alt="App Store" className="w-32 cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} QuickShow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
