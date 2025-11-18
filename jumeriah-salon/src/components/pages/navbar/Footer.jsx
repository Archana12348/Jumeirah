import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterPage() {
  return (
    <div className="w-full bg-white bottom-0 left-0 right-0 z-50 border-t-2 mt-10 text-gray-700 font-serif px-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-20 px-6">
        {/* Location */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>

          {/* India Location */}
          <p className="font-semibold mt-2">India Office</p>
          <p>Mumbai, 400001</p>
          <p>Marine Drive, Maharashtra</p>

          {/* Dubai Location */}
          <p className="font-semibold mt-4">Dubai Office</p>
          <p>Dubai Marina</p>
          <p>United Arab Emirates</p>
        </div>

        {/* Contact */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>phone: +12 9 8765 43</p>
          <p>info@themeperch.net</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-xl">
            <FaFacebookF
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              size={22}
            />
            <FaInstagram
              className="hover:text-pink-600 transition-colors duration-300 cursor-pointer"
              size={22}
            />
          </div>
        </div>

        {/* Working Hours */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
          <p>Mon-Fri: 10:00AM - 9:00PM</p>
          <p>Saturday: 10:00 AM - 7:00 PM</p>
          <p>Sunday: 10:00 PM - 7:00 PM</p>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Social Icons */}
      <div className="py-10 flex items-center justify-center gap-8 text-2xl">
        <FaFacebookF
          className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaTwitter
          className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaInstagram
          className="hover:text-pink-600 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaYoutube
          className="hover:text-red-600 transition-colors duration-300 cursor-pointer"
          size={22}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest mb-8 px-4">
        {["ABOUT", "SERVICES", "TEAM", "GALLERY", "BLOG", "CONTACT"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="hover:text-black hover:underline transition duration-300"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm pb-10">
        Copyright 2025 Reine. All right reserved
      </p>
    </div>
  );
}
