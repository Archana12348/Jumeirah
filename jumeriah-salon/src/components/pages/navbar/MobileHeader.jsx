import { useState, useEffect, useRef } from "react";
import { User, Heart, ShoppingCart, Menu, Wallet, X } from "lucide-react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import LoginDrawer from "../../drawer/LoginDrawer";
import GradientIcon from "../../common/GradientIcon";

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
  const mobileDropdownRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // 🔥 Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟦 Close on clicking outside
  const closeSidebar = () => setOpen(false);
  const handleUserClick = () => {
    if (!isLoggedIn) {
      setDrawerOpen(true); // 👈 DRAWER OPEN
    } else {
      setDropdownOpen(!dropdownOpen); // Existing dropdown
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative ">
        {/* Banner Image (auto height & contain) */}
        <img
          src="/banner2.jpg"
          alt="Banner"
          className="w-full h-auto object-contain"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))`,
          }}
        />
        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-black shadow-lg" : "bg-transparent"
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
                isScrolled ? "h-12" : "h-14"
              }`}
            />

            {/* ICONS */}
            <div className="flex items-center gap-4 relative">
              {/* USER ICON + USERNAME */}
              <div
                onClick={handleUserClick}
                className="flex items-center gap-1 cursor-pointer"
              >
                {isScrolled ? (
                  <GradientIcon icon={User} size={22} />
                ) : (
                  <User size={22} className="text-white" />
                )}

                {/* USERNAME */}
                {isLoggedIn && (
                  <span
                    className={`
                   ${
                     isScrolled
                       ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                       : "text-white"
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
                  ref={mobileDropdownRef}
                  className="absolute top-9 left-0 ml-[-35px] bg-white rounded-xl p-2 w-40 z-50 
               shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
                >
                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                 hover:bg-[#00CED1] hover:text-white"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </p>

                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                 hover:bg-[#00CED1] hover:text-white"
                    onClick={() => navigate("/orders")}
                  >
                    Orders
                  </p>

                  <p
                    className="py-2 px-3 text-center text-red-600 cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                 hover:bg-[#00CED1] hover:text-white"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </p>
                </div>
              )}

              {/* HEART ICON + COUNT */}
              <div className="relative">
                {isScrolled ? (
                  <GradientIcon icon={Heart} size={22} />
                ) : (
                  <Heart size={22} className="text-white" />
                )}

                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 py-[1px] rounded-full">
                  {wishlistCount}
                </span>
              </div>

              {/* CART ICON + COUNT */}
              {/* <div className="relative">
                <ShoppingCart
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] px-1 py-[1px] rounded-full">
                  {cartCount}
                </span>
              </div> */}
              {/* Wallet ICON + COUNT */}
              {/* <div className="relative">
                <Wallet
                  size={22}
                  className={`transition ${
                    isScrolled ? "text-yellow-800" : "text-white"
                  }`}
                />

                <span className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] px-1 py-[1px] rounded-full">
                  {walletBalance}
                </span>
              </div> */}

              {/* MENU */}
              <Menu
                size={28}
                onClick={() => setOpen(true)}
                className={`transition ${
                  isScrolled ? "text-yellow-800" : "text-white"
                }`}
              />
              <LoginDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        </header>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 mt-14 ">
          <h1
            className="text-xl font-bold fade-animate
             bg-gradient-to-r from-white via-[#20F6FF] to-white
             bg-clip-text text-transparent
             drop-shadow-[0_0_15px_#20F6FF]
             drop-shadow-[0_0_25px_#20F6FF]"
            style={{ fontFamily: "Scheherazade New" }}
          >
            La Vie Jumeirah
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
              className="pb-2 border-b border-gray-200 hover:text-[#00CED1] transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BOOK APPOINTMENT BUTTON */}
        <button className="mt-8 w-full bg-[#00CED1] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#00b5c8] transition animate-pulse">
          Book An Appointment
        </button>
      </div>
    </>
  );
}

/* ---------------------------------------- */
/* Animated Tagline                         */
/* ---------------------------------------- */

function AnimatedTagline() {
  const lines = ["Maison De Beaute"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="text-md font-semibold mt-1 h-10 fade-animate
             bg-gradient-to-r from-white via-[#20F6FF] to-white
             bg-clip-text text-transparent
             drop-shadow-[0_0_10px_#20F6FF]
             drop-shadow-[0_0_20px_#20F6FF]"
      style={{ fontFamily: "Scheherazade New" }}
    >
      {lines[index]}
    </p>
  );
}
