import React from "react";
import Button from "./Button";

// Replace this URL with your actual uploaded image path
const bgImage = "url('/gallery/offerrrr.jpeg')";

export default function PromoSection() {
  return (
    <div
      className="relative w-full h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center bg-no-repeat"
      style={{ backgroundImage: bgImage }}
    >
      {/* Dark Overlay - essential for text readability over the image */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div
        className="relative z-10 text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text px-4"
        style={{ fontFamily: "var(--font-heading--family)" }}
      >
        {/* Top Label */}
        <p className="text-sm md:text-base  tracking-[0.2em] uppercase mb-4">
          This Week Only
        </p>

        {/* Main Headline - Mixing fonts to match image */}
        <h1 className="text-5xl md:text-7xl mb-4">
          <span className="">Get</span>{" "}
          <span className="font-bold ">30% OFF</span>
        </h1>

        {/* Sub Headline */}
        <h2 className="text-3xl md:text-5xl  mb-10">on all Services</h2>

        {/* Button */}
        <button className="border border-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
          Book an Appointment
        </button>
      </div>

      {/* Scroll to top arrow (Bottom Right) */}
      <div className="absolute bottom-8 right-8">
        <button className="bg-gray-700/50 hover:bg-gray-800 text-white p-3 rounded transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
