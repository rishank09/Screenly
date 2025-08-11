import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen text-white'>

      {/* Marvel Logo */}
      <img src={assets.marvelLogo} alt="Marvel Logo" className="max-h-11 lg:h-11 mt-20" />

      {/* Movie Title */}
      <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-[700px]'>
        Guardians <br /> of the Galaxy
      </h1>

      {/* Date & Duration */}
      <div className='flex items-center gap-6 text-gray-300'>
        <span className="flex items-center gap-2">
          <Calendar size={18} />
          Aug 15, 2025
        </span>
        <span className="flex items-center gap-2">
          <Clock size={18} />
          2h 15m
        </span>
      </div>

      {/* Book Button */}
      <Link
        to="/movies"
        className="mt-4 bg-primary hover:bg-primary-dull px-6 py-3 rounded-full text-white flex items-center gap-2 transition duration-300"
      >
        Explore Movies <ArrowRight size={18} />
      </Link>

    </div>
  );
};

export default HeroSection;
