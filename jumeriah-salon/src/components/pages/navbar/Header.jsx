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
import { User, Heart, ShoppingCart } from "lucide-react";
import Button from "../../common/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔥 Scroll Effect
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
              isScrolled ? "py-2 text-black" : "py-5 text-white"
            }`}
          >
            {/* LEFT - Book Appointment */}
            <Button
              className={`text-sm font-medium bg-transparent transition-all ${
                isScrolled
                  ? "text-black animate-pulse"
                  : "text-white animate-pulse"
              }`}
            >
              Book Appointment
            </Button>

            {/* CENTER LOGO */}
            <img
              src="/logo/KY Without Moon final.png"
              alt="Logo"
              className={`mx-auto transition-all duration-500 ${
                isScrolled ? "h-14" : "h-20"
              }`}
            />

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 cursor-pointer group">
                <User
                  className={`w-5 h-5 transition ${
                    isScrolled
                      ? "text-black"
                      : "text-white group-hover:text-gray-300"
                  }`}
                />
                <span
                  className={`text-sm font-medium transition ${
                    isScrolled
                      ? "text-black"
                      : "text-white group-hover:text-gray-300"
                  }`}
                >
                  My Account
                </span>
              </div>

              <Heart
                className={`w-5 h-5 cursor-pointer transition ${
                  isScrolled ? "text-black" : "text-white hover:text-gray-300"
                }`}
              />
              <ShoppingCart
                className={`w-5 h-5 cursor-pointer transition ${
                  isScrolled ? "text-black" : "text-white hover:text-gray-300"
                }`}
              />
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
                isScrolled ? "text-black" : "text-white"
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
                      isScrolled ? "bg-black" : "bg-white"
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
