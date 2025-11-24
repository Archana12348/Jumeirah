// import { useState, useEffect } from "react";
// import { User, Heart, ShoppingCart } from "lucide-react";
// import Button from "../../common/Button";

// export default function Header() {
//   return (
//     <>
//       {/* HERO BANNER (BACKGROUND IMAGE) */}
//       <div className="relative w-full h-[630px] ">
//         <img
//           src="/Capture.PNG"
//           alt="Banner"
//           className="w-full h-full object-cover"
//         />

//         {/* Transparent Header Now On Top */}
//         <header className="fixed top-0 left-0 w-full z-50">
//           {/* TOP BAR */}
//           <div className="w-full py-2 flex justify-between items-center px-6 text-white bg-transparent">
//             {/* LEFT - Book Appointment */}
//             <Button className="text-sm font-medium hover:text-gray-300 transition bg-transparent animate-pulse">
//               Book Appointment
//             </Button>

//             {/* CENTER - LOGO */}
//             <img
//               src="/logo/KY Without Moon final.png"
//               alt="Logo"
//               className="h-20 mx-auto"
//             />

//             {/* RIGHT - Icons */}
//             <div className="flex items-center gap-10 text-white">
//               <div className="flex items-center gap-2 cursor-pointer group">
//                 <User className="w-6 h-6 group-hover:text-gray-300" />
//                 <span className="text-sm font-medium group-hover:text-gray-300">
//                   My Account
//                 </span>
//               </div>

//               <Heart className="w-6 h-6 cursor-pointer hover:text-gray-300" />
//               <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-300" />
//             </div>
//           </div>

//           {/* NAVIGATION MENU */}
//           <nav className="w-full bg-transparent">
//             <ul className="flex justify-center gap-10 py-3 text-white font-medium text-sm uppercase tracking-wide">
//               {[
//                 "Home",
//                 "About Us",
//                 "Services",
//                 "Products",
//                 "Gallery",
//                 "Contact Us",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="cursor-pointer relative group transition"
//                 >
//                   {item}

//                   {/* underline */}
//                   <span
//                     className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white
//                     transition-all duration-300 group-hover:w-full"
//                   ></span>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </header>

//         {/* CENTER CONTENT (HERO TEXT) */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
//           {/* Main Title */}
//           <h1 className="text-6xl font-bold drop-shadow-xl fade-animate">
//             La Vie Jumierah
//           </h1>

//           {/* Animated Tagline */}
//           <AnimatedTagline />
//         </div>
//       </div>
//     </>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* ANIMATED TAGLINE COMPONENT */
// /* ------------------------------------------------------------------ */

// function AnimatedTagline() {
//   const lines = ["Elevate Your Style", "Radiate Power", "Unleash Your Glamour"];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % lines.length);
//     }, 3000); // 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p className="text-lg justify-center font-semibold mt-4 h-14 transition-all duration-700 ease-in-out drop-shadow-lg fade-animate">
//       {lines[index]}
//     </p>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { User, Heart, ShoppingCart, Wallet } from "lucide-react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import LoginDrawer from "../../drawer/LoginDrawer";

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Rahul"); // <-- FIXED // Simulated login state
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);
  const [walletBalance, setWalletBalance] = useState(520);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //  Scroll Effect
  useEffect(() => {
    const bannerHeight = 630; // your banner height

    const handleScroll = () => {
      if (window.scrollY > bannerHeight * 0.1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserClick = () => {
    if (!isLoggedIn) {
      setDrawerOpen(true); // 👈 DRAWER OPEN
    } else {
      setDropdownOpen(!dropdownOpen); // Existing dropdown
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // close dropdown
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
      <div
        className="relative w-full h-[630px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/banner2.jpg')`,
        }}
      >
        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-black" : "bg-transparent translate-y-2"
          }`}
        >
          {/* TOP BAR */}
          <div
            className={`w-full flex justify-between items-center px-6 transition-all duration-500 ${
              isScrolled ? "py-2 text-[#d6b56b]" : "py-5 text-white"
            }`}
          >
            {/* LEFT - Book Appointment */}
            <Button
              className={`text-sm font-medium bg-transparent transition-all ${
                isScrolled
                  ? "text-[#d6b56b] animate-pulse"
                  : "text-white animate-pulse"
              }`}
            >
              Book An Appointment
            </Button>

            {/* CENTER LOGO */}
            <img
              src="/logo/logo.png"
              alt="Logo"
              className={`mx-auto transition-all duration-500 ${
                isScrolled ? "h-14" : "h-20"
              }`}
            />

            {/* RIGHT ICONS */}
            <div
              className={`relative flex items-center gap-6 pr-2${
                isScrolled
                  ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                  : "text-white group-hover:text-gray-300"
              }`}
            >
              {/* USER */}
              <div
                onClick={handleUserClick}
                className="flex items-center gap-1 cursor-pointer group  rounded-3xl relative"
              >
                <User
                  className={`w-6 h-6 transition ${
                    isScrolled
                      ? "text-yellow-600 "
                      : "text-white group-hover:text-gray-300"
                  }`}
                />

                {/* USERNAME WHEN LOGGED IN */}
                {isLoggedIn && (
                  <span
                    className={`text-sm font-medium transition ${
                      isScrolled
                        ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                        : "text-white group-hover:text-gray-300"
                    } pr-[11px] text-[20px]`}
                  >
                    {userName}
                  </span>
                )}
              </div>

              {/* USER DROPDOWN */}
              {dropdownOpen && isLoggedIn && (
                <div
                  ref={dropdownRef}
                  className="absolute top-9 left-1/4 -translate-x-1/2 bg-white rounded-2xl p-2 w-48 
                  z-50 shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
                >
                  {[
                    {
                      label: "Dashboard",
                      action: () => navigate("/dashboard"),
                    },
                    { label: "Orders", action: () => navigate("/orders") },
                    {
                      label: "Logout",
                      action: () => setIsLoggedIn(false),
                      red: true,
                    },
                  ].map((item, index) => (
                    <p
                      key={index}
                      onClick={item.action}
                      className={`py-2 px-4 my-1 text-center cursor-pointer rounded-lg text-sm font-medium
                                  transition-all duration-300 ease-in-out
                                  hover:bg-[#00CED1] hover:text-white
                                  ${item.red ? "text-red-600" : "text-black"}`}
                    >
                      {item.label}
                    </p>
                  ))}
                </div>
              )}

              {/* USER DROPDOWN */}

              {/* WISHLIST */}
              <div className="relative">
                <Heart
                  className={`w-6 h-6 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-600"
                      : "text-white hover:text-gray-300"
                  }`}
                />

                {/* WISHLIST COUNT BADGE */}
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              </div>

              {/* CART */}
              <div className="relative">
                <ShoppingCart
                  className={`w-6 h-6 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-600"
                      : "text-white hover:text-gray-300"
                  }`}
                />

                {/* CART COUNT BADGE */}
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>

              {/* WALLET */}
              <div className="relative">
                <Wallet
                  className={`w-6 h-6 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-600"
                      : "text-white hover:text-gray-300"
                  }`}
                />

                {/* WALLET BALANCE */}
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  ₹{walletBalance}
                </span>
              </div>

              <LoginDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            className={`w-full transition-all duration-500 ${
              isScrolled ? "bg-black" : "bg-transparent translate-y-2"
            }`}
          >
            <ul
              className={`flex justify-center gap-10 py-3 font-medium text-sm uppercase tracking-wide transition ${
                isScrolled
                  ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                  : "text-white"
              }`}
            >
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
                  className={`cursor-pointer relative group transition  ${
                    isScrolled
                      ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                      : "bg-transparent"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-yellow-600" : "bg-white"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* CENTER HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1
            className="text-6xl font-bold fade-animate
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
    </>
  );
}

/* -------------------------------------------------------- */
/* ANIMATED TAGLINE */
/* -------------------------------------------------------- */

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
      className="text-xl font-semibold mt-4 h-14 fade-animate
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
