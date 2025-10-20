import React from "react";
import star from "../assets/star.svg";

function Cloths() {
  return (
    <div className="w-full bg-gray-100 py-16">
      {/* Centered box container */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-0.02em]">
            FIND CLOTHES THAT <br className="hidden sm:block" />
            MATCHES YOUR <br className="hidden sm:block" />
            STYLE
          </h1>

          <img
            src={star}
            alt="star"
            className="hidden md:block lg:block star-icon absolute w-26 h-26 -top-8 right-[-8rem] "
          />
        </div>
        {/* Subtext */}
        <img
          src={star}
          alt="star"
          className="hidden md:block lg:block lg:ml-10 star-icon absolute w-14 h-14 "
        />
        <div className="text-gray-500 mt-5 md:ml-15 lg:ml-30 text-sm sm:text-base mb-3 md:text-md lg:text-lg max-w-2xl mx-auto">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start sm:ml-8  md:mt-8 md:ml-18 md:justify-start lg:ml-35 lg:mt-10">
          <button
            className="bg-black text-white px-10 py-3 md:py-4 md:px-12 lg:px-14 rounded-full 
    border border-transparent 
    hover:bg-white hover:text-black hover:border-black 
    transition text-sm sm:text-base"
          >
            Shop Now
          </button>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 text-center">
          <div className="lg:ml-35">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              200+
            </div>
            <div className="text-gray-500 text-xs sm:text-sm md:text-md lg:text-lg">
              International Brands
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl">
              2000+
            </div>
            <div className="text-gray-500 text-xs sm:text-sm md:text-md lg:text-lg">
              High-Quality Products
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 lg:ml-[-40px]">
            <div className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl">
              30,000+
            </div>
            <div className="text-gray-500 text-xs sm:text-sm md:text-md lg:text-lg">
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cloths;
