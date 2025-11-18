import { useState } from "react";
import { User, Heart, ShoppingCart } from "lucide-react";
import Button from "../../common/Button";

export default function Header() {
  return (
    <header className="w-full bg-[#00CED1] fixed top-0 left-0 z-50 shadow-sm">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background1.jfif"
          alt="Background"
          className="w-full h-full object-cover "
        />
      </div>
      {/* TOP BAR */}
      <div className="w-full py-2 flex justify-between items-center px-6 text-black bg-white/70 backdrop-blur-md">
        {/* LEFT - Book Appointment */}
        <Button className="text-sm font-medium hover:text-gray-700 transition">
          Book Appointment
        </Button>

        {/* CENTER - LOGO */}
        <img
          src="/logo/KY Without Moon final.png"
          alt="Logo"
          className="h-20 mx-auto"
        />

        {/* RIGHT - Icons */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 cursor-pointer group">
            <User className="w-5 h-5 group-hover:text-gray-700" />
            <span className="text-sm font-medium group-hover:text-gray-700">
              My Account
            </span>
          </div>

          <Heart className="w-5 h-5 cursor-pointer hover:text-gray-700" />

          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* NAVIGATION MENU */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-t border-gray-200">
        <ul className="flex justify-center gap-10 py-3 text-black font-medium text-sm uppercase tracking-wide">
          {[
            "Home",
            "About Us",
            "Services",
            "Products",
            "Gallery",
            "Contact Us",
          ].map((item) => (
            <li key={item} className="cursor-pointer relative group transition">
              {item}

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black 
          transition-all duration-300 group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
