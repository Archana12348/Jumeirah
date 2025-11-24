// import React from "react";

// const services = [
//   { name: "Skin", img: "/service/skin.jpg" },
//   { name: "Hair", img: "/service/hair.jpg" },
//   { name: "Makeup", img: "/service/makeup.jpg" },
//   { name: "Heena", img: "/service/heena.webp" },
//   { name: "Nails", img: "/service/nail.jfif" },
// ];

// export default function ServicesSection() {
//   return (
//     <div className="w-full py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Heading */}
//         <h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
//           style={{ fontFamily: "Scheherazade New" }}
//         >
//           Our Premium Services
//         </h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 ">
//           {services.map((item) => (
//             <div
//               key={item.name}
//               className="flex flex-col items-center text-center group bg-gradient-to-b from-[#00CFD1] to-white "
//             >
//               {/* Capsule Image */}
//               <div
//                 className="w-full h-full object-cover
//            transition-all duration-700 ease-out
//            group-hover:opacity-75 group-hover:scale-110 group-hover:rotate-[1deg]"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-full object-cover
//            transition-all duration-700 ease-out
//            group-hover:opacity-75 group-hover:scale-110 group-hover:rotate-[1deg]"
//                 />
//               </div>

//               {/* Name */}
//               <p className="mt-5 text-base md:text-lg font-semibold  text-gray-700 group-hover:text-black transition">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// with boarder

import React from "react";

const services = [
  { name: "Skin", img: "/service/skin.jpg" },
  { name: "Hair", img: "/service/hair.jpg" },
  { name: "Makeup", img: "/service/makeup.jpg" },
  { name: "Heena", img: "/service/heena.webp" },
  { name: "Nails", img: "/service/nail.jfif" },
];

export default function ServicesSection() {
  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black"
          style={{ fontFamily: "Scheherazade New" }}
        >
          Our Premium Services
        </h2>

        {/* Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-8 sm:gap-10 md:gap-12
        "
        >
          {services.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center"
            >
              {/* Frame Wrapper Responsive */}
              <div
                className="
                  relative 
                  w-[150px] h-[200px] 
                  sm:w-[180px] sm:h-[180px] 
                  md:w-[250px] md:h-[300px] 
                  lg:w-[250px] lg:h-[320px] 
                  flex items-center justify-center
                "
              >
                {/* FRAME */}
                <img
                  src="/service/frame.png"
                  alt="frame"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* SERVICE IMAGE (always same ratio) */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    relative 
                    w-[70%] h-[70%] 
                    md:w-[67%] md:h-[74%] 
                    object-cover
                  "
                />
              </div>

              {/* Name */}
              <p className="mt-4 sm:mt-5 text-lg sm:text-base md:text-xl font-semibold text-gray-700 in-hover:text-[#2e2102] ">
                {item.name}
              </p>
              {/* <p
                className="
    mt-4 sm:mt-5 
    text-sm sm:text-base md:text-xl 
    font-semibold 
    text-gray-700 
    hover:text-[#2e2102]
    transform 
    transition 
    duration-300 
    hover:scale-110
  "
              >
                {item.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
