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
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          Our Premium Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 ">
          {services.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center group bg-gradient-to-b from-[#00CFD1] to-white "
            >
              {/* Capsule Image */}
              <div
                className="w-full h-full object-cover 
           transition-all duration-700 ease-out 
           group-hover:opacity-75 group-hover:scale-110 group-hover:rotate-[1deg]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover 
           transition-all duration-700 ease-out 
           group-hover:opacity-75 group-hover:scale-110 group-hover:rotate-[1deg]"
                />
              </div>

              {/* Name */}
              <p className="mt-5 text-base md:text-lg font-semibold  text-gray-700 group-hover:text-black transition">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
