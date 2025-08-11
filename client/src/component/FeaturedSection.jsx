import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedSection = () => {
  return (
    <div className="flex justify-between items-center px-6 md:px-16 lg:px-36 py-6 ">
      
      {/* Title */}
      <h2 className="text-white text-xl font-semibold">
        Now Showing
      </h2>

      {/* View All Button */}
      <Link
        to="/movies"
        className="flex items-center gap-2 text-white hover:text-red-500 transition duration-200"
      >
        View All <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default FeaturedSection;
