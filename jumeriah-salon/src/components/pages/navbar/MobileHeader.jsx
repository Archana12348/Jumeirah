import { useState, useEffect } from "react";
import { User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Button from "../../common/Button";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 🔥 Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟦 Close on clicking outside
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative w-full h-[520px] sm:h-[620px]">
        <img
          src="/Capture.PNG"
          alt="Mobile Banner"
          className="w-full h-full object-cover"
        />

        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-[#00CDE1] shadow-lg" : "bg-transparent"
          }`}
        >
          <div
            className={`flex justify-between items-center px-4 transition-all duration-500 ${
              isScrolled ? "py-2" : "py-4"
            }`}
          >
            {/* LOGO */}
            <img
              src="/logo/logo.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />

            {/* ICONS */}
            <div className="flex items-center gap-4">
              <User
                size={22}
                className={`transition ${
                  isScrolled ? "text-yellow-800" : "text-white"
                }`}
              />
              <Heart
                size={22}
                className={`transition ${
                  isScrolled ? "text-yellow-800" : "text-white"
                }`}
              />
              <ShoppingCart
                size={22}
                className={`transition ${
                  isScrolled ? "text-yellow-800" : "text-white"
                }`}
              />

              <Menu
                size={28}
                onClick={() => setOpen(true)}
                className={`transition ${
                  isScrolled ? "text-yellow-800" : "text-white"
                }`}
              />
            </div>
          </div>
        </header>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl fade-animate">
            La Vie Jumierah
          </h1>

          <AnimatedTagline />
        </div>
      </div>

      {/* 🟦 OVERLAY (Click outside to close) */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        ></div>
      )}

      {/* 🟦 SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end mb-6">
          <X
            size={28}
            onClick={() => setOpen(false)}
            className="text-gray-700 cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-5 text-[18px] font-medium text-gray-800">
          {[
            "Home",
            "About Us",
            "Services",
            "Products",
            "Gallery",
            "Contact Us",
          ].map((item) => (
            <li
              key={item}
              className="pb-2 border-b border-gray-200 hover:text-[#00CDE1] transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BOOK APPOINTMENT BUTTON */}
        <button className="mt-8 w-full bg-[#00CDE1] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#00b5c8] transition animate-pulse">
          Book Appointment
        </button>
      </div>
    </>
  );
}

/* ---------------------------------------- */
/* Animated Tagline                         */
/* ---------------------------------------- */

function AnimatedTagline() {
  const lines = ["Elevate Your Style", "Radiate Power", "Unleash Your Glamour"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg font-semibold mt-3 h-10 transition-all duration-700 ease-in-out drop-shadow-lg fade-animate">
      {lines[index]}
    </p>
  );
}
