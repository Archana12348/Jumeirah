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
//                 <User className="w-5 h-5 group-hover:text-gray-300" />
//                 <span className="text-sm font-medium group-hover:text-gray-300">
//                   My Account
//                 </span>
//               </div>

//               <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
//               <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
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

import { useState, useEffect } from "react";
import { User, Heart, ShoppingCart, Wallet } from "lucide-react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Rahul"); // <-- FIXED // Simulated login state
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);
  const [walletBalance, setWalletBalance] = useState(520);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🔥 Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 580) {
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
      navigate("/login");
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative w-full h-[630px] ">
        <img
          src="/Capture.PNG"
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />

        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-[#00CDE1]" : "bg-transparent translate-y-2"
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
                isScrolled ? "text-[#d6b56b]" : "text-white animate-pulse"
              }`}
            >
              Book Appointment
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
            <div className="relative flex items-center gap-2 pr-2">
              {/* USER */}
              <div
                onClick={handleUserClick}
                className="flex items-center gap-1 cursor-pointer group  rounded-3xl relative"
              >
                <User
                  className={`w-8 h-8 transition ${
                    isScrolled
                      ? "text-yellow-800 "
                      : "text-white group-hover:text-gray-300"
                  }`}
                />

                {/* USERNAME WHEN LOGGED IN */}
                {isLoggedIn && (
                  <span
                    className={`text-sm font-medium transition ${
                      isScrolled
                        ? "text-yellow-800"
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
                  className="absolute top-9 ml-[-35px] bg-white rounded-xl p-1 w-40 z-50 shadow-xl 
               transition-all duration-300 ease-in-out"
                >
                  {/* DASHBOARD */}
                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                 hover:shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </p>

                  {/* ORDERS */}
                  <p
                    className="py-2 px-3 text-center text-black cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                 hover:shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
                    onClick={() => navigate("/orders")}
                  >
                    Orders
                  </p>

                  {/* LOGOUT */}
                  <p
                    className="py-2 px-3 text-center text-red-600 cursor-pointer rounded-lg 
                 transition duration-300 ease-in-out
                  hover:shadow-[0_4px_6px_rgba(255,0,0,0.4)]"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </p>
                </div>
              )}

              {/* USER DROPDOWN */}
              {/* {dropdownOpen && isLoggedIn && (
                <div className="absolute top-14 left-0 bg-white shadow-lg rounded-xl p-4 w-40 z-50">
                  <p
                    className="py-2 cursor-pointer text-black hover:bg-gray-100 rounded-lg"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </p>

                  <p
                    className="py-2 cursor-pointer text-black hover:bg-gray-100 rounded-lg"
                    onClick={() => navigate("/orders")}
                  >
                    Orders
                  </p>

                  <p
                    className="py-2 cursor-pointer text-red-700 shadow-2xl hover:bg-gray-100 rounded-lg"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </p>
                </div>
              )} */}

              {/* WISHLIST */}
              <div className="relative">
                <Heart
                  className={`w-8 h-8 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-800"
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
                  className={`w-8 h-8 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-800"
                      : "text-white hover:text-gray-300"
                  }`}
                />

                {/* CART COUNT BADGE */}
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>

              {/* WALLET */}
              <div className="relative">
                <Wallet
                  className={`w-8 h-8 cursor-pointer transition  ${
                    isScrolled
                      ? "text-yellow-800"
                      : "text-white hover:text-gray-300"
                  }`}
                />

                {/* WALLET BALANCE */}
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  ₹{walletBalance}
                </span>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            className={`w-full transition-all duration-500 ${
              isScrolled ? "bg-[#00CDE1]" : "bg-transparent translate-y-2"
            }`}
          >
            <ul
              className={`flex justify-center gap-10 py-3 font-medium text-sm uppercase tracking-wide transition ${
                isScrolled ? "text-yellow-800" : "text-white"
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
                  className="cursor-pointer relative group transition"
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-yellow-800" : "bg-white"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* CENTER HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-6xl font-bold drop-shadow-xl fade-animate">
            La Vie Jumierah
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
  const lines = ["Elevate Your Style", "Radiate Power", "Unleash Your Glamour"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg justify-center font-semibold mt-4 h-14 transition-all duration-700 ease-in-out drop-shadow-lg fade-animate">
      {lines[index]}
    </p>
  );
}
