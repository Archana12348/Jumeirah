// import React from "react";

// // Placeholder images - Replace these with your actual imports or URLs
// const wilshireImage =
//   "https://images.unsplash.com/photo-1761839259112-aaea03db3633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";
// const westwoodImage =
//   "https://images.unsplash.com/photo-1761839259112-aaea03db3633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";

// export default function LocationsSection() {
//   const LocationCard = ({ image, title, address, estDate }) => (
//     <div
//       className="flex flex-col items-center max-w-lg mx-auto"
//       style={{ fontFamily: "var(--font-heading--family)" }}
//     >
//       {/* Image */}
//       <div className="w-full h-64 md:h-80 overflow-hidden mb-6">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Title: Centered text */}
//       <h3 className="text-2xl text-center md:text-3xl  text-gray-900 mb-3">
//         {title}
//       </h3>

//       {/* Address: Centered text */}
//       <p className="text-gray-500 text-sm md:text-base mb-2 font-light">
//         {address}
//       </p>

//       {/* Footer: Flex container centered horizontally */}
//       <div className="w-full flex justify-center items-center gap-2 text-gray-500 text-sm md:text-base font-light">
//         <span>{estDate}</span>
//         <span className="text-gray-300">|</span>
//         <a href="#" className="underline hover:text-black transition-colors">
//           Learn More
//         </a>
//         <span className="text-gray-300">|</span>
//         <a href="#" className="underline hover:text-black transition-colors">
//           Book Now
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white py-16 px-4">
//       <div
//         className="max-w-7xl mx-auto text-center"
//         style={{ fontFamily: "var(--font-heading--family)" }}
//       >
//         {/* Top Label */}
//         <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-2">
//           Our Locations
//         </p>

//         {/* Main Title */}
//         <h2
//           className="text-5xl  text-gray-800 mb-12"
//           style={{ fontFamily: "var(--font-heading--family)" }}
//         >
//           Welcome to Reine
//         </h2>

//         {/* Location Cards Container */}
//         <div
//           className="flex flex-col md:flex-row justify-center items-start gap-y-12"
//           style={{ fontFamily: "var(--font-heading--family)" }}
//         >
//           {/* Wilshire Location */}
//           <LocationCard
//             image={wilshireImage}
//             title="Visit Reine Wilshire"
//             address="8721 Central Ave, Los Angeles, CA 90036"
//             estDate="est. 2018"
//           />

//           {/* Westwood Location */}
//           <LocationCard
//             image={westwoodImage}
//             title="Visit Reine Westwood"
//             address="8721 Central Ave, Los Angeles, CA 90036"
//             estDate="est. 2018"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

// Placeholder images - Replace these with your actual imports or URLs
const wilshireImage =
  "https://images.unsplash.com/photo-1761839259112-aaea03db3633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";
const westwoodImage =
  "https://images.unsplash.com/photo-1761839259112-aaea03db3633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";

export default function LocationsSection() {
  const LocationCard = ({ image, title, address, estDate }) => (
    <div
      className="flex flex-col items-center max-w-lg mx-auto"
      style={{ fontFamily: "var(--font-heading--family)" }}
    >
      {/* Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Title: Centered text */}
      <h3 className="text-2xl text-center md:text-3xl   mb-3">{title}</h3>

      {/* Address: Centered text */}
      <p className=" text-sm md:text-base mb-2 font-light">{address}</p>

      {/* Footer: Flex container centered horizontally */}
      <div className="w-full flex justify-center items-center gap-2  text-sm md:text-base font-light">
        <span>{estDate}</span>
        <span className="text-gray-300">|</span>
        <a href="#" className="underline hover:text-black transition-colors">
          Learn More
        </a>
        <span className="text-gray-300">|</span>
        <a href="#" className="underline hover:text-black transition-colors">
          Book Now
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black py-16 px-4">
      <div
        className="max-w-7xl mx-auto text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
        style={{ fontFamily: "var(--font-heading--family)" }}
      >
        {/* Top Label */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase  mb-2">
          Our Locations
        </p>

        {/* Main Title */}
        <h2
          className="text-5xl   mb-12"
          style={{ fontFamily: "var(--font-heading--family)" }}
        >
          Welcome to Reine
        </h2>

        {/* Location Cards Container */}
        <div
          className="flex flex-col md:flex-row justify-center items-start gap-y-12"
          style={{ fontFamily: "var(--font-heading--family)" }}
        >
          {/* Wilshire Location */}
          <LocationCard
            image={wilshireImage}
            title="Visit Reine Wilshire"
            address="8721 Central Ave, Los Angeles, CA 90036"
            estDate="est. 2018"
          />

          {/* Westwood Location */}
          <LocationCard
            image={westwoodImage}
            title="Visit Reine Westwood"
            address="8721 Central Ave, Los Angeles, CA 90036"
            estDate="est. 2018"
          />
        </div>
      </div>
    </div>
  );
}
