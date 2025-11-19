import { useState, useEffect } from "react";
import { User, Heart, ShoppingCart, Menu, Wallet, X } from "lucide-react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

export default function MobileHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Rahul"); // <-- FIXED // Simulated login state
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);
  const [walletBalance, setWalletBalance] = useState(520);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
  const handleUserClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

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
              src="/logo/KY Without Moon final.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />

            {/* ICONS */}
            <div className="flex items-center gap-4 relative">
              {/* USER ICON + USERNAME */}
              <div
                onClick={handleUserClick}
                className="flex items-center gap-1 cursor-pointer"
              >
                <User
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                {/* USERNAME */}
                {isLoggedIn && (
                  <span
                    className={`
          ${
            isScrolled ? "text-yellow-800" : "text-white"
          } text-[20px] font-medium
        `}
                  >
                    {userName}
                  </span>
                )}
              </div>

              {/* USER DROPDOWN */}
              {dropdownOpen && isLoggedIn && (
                <div
                  className="absolute top-9 left-0 ml-[-35px] bg-white rounded-xl p-2 w-40 z-50 shadow-xl
                 transition-all duration-300 ease-in-out"
                >
                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                   transition duration-300 ease-in-out
                   hover:shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </p>

                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                   transition duration-300 ease-in-out
                   hover:shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
                    onClick={() => navigate("/orders")}
                  >
                    Orders
                  </p>

                  <p
                    className="py-2 px-3 text-center text-red-600 cursor-pointer rounded-lg 
                   transition duration-300 ease-in-out
                   hover:shadow-[0_3px_3px_rgba(255,0,0,0.35)]"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </p>
                </div>
              )}

              {/* HEART ICON + COUNT */}
              <div className="relative">
                <Heart
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 py-[1px] rounded-full">
                  {wishlistCount}
                </span>
              </div>

              {/* CART ICON + COUNT */}
              <div className="relative">
                <ShoppingCart
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] px-1 py-[1px] rounded-full">
                  {cartCount}
                </span>
              </div>
              {/* Wallet ICON + COUNT */}
              <div className="relative">
                <Wallet
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                <span className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] px-1 py-[1px] rounded-full">
                  {walletBalance}
                </span>
              </div>

              {/* MENU */}
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
        <button className="mt-8 w-full bg-[#00CDE1] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#00b5c8] transition">
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
