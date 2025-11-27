// import React from "react";

// import Button from "../../common/Button";

// export default function ServiceDetailPage() {
//   // MAIN SERVICE NAME
//   const serviceName = "Makeup";

//   // UPPER GALLERY IMAGES
//   const galleryImages = [
//     "/service/makeup/makeup1.webp",
//     "/service/makeup/makeup2.webp",
//     "/service/makeup/party2.webp",
//     "/service/makeup/haldi2.webp",
//     "/service/makeup/jaggo.jpg",
//     "/service/makeup/party1.jpeg",
//   ];

//   // SUB SERVICE LIST
//   const subCategories = [
//     {
//       title: "Bridal Makeup",
//       image: "/service/makeup/makeup1.webp",
//     },
//     {
//       title: "Party Makeup",
//       image: "/service/makeup/party2.webp",
//     },
//     {
//       title: "Haldi Makeup",
//       image: "/service/makeup/haldi2.webp",
//     },
//     {
//       title: "Engagement Makeup",
//       image: "/service/makeup/party1.jpeg",
//     },
//     {
//       title: "Reception Makeup",
//       image: "/service/makeup/reception.webp",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen  text-black font-serif">
//       {/* TOP HEADING */}
//       <div className="text-center py-12">
//         <h1
//           className="text-4xl sm:text-5xl font-bold bg-gradient-to-r
//          from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
//         >
//           {serviceName}
//         </h1>
//         <p className="text-gray-300 mt-3 text-sm sm:text-base">
//           Explore our premium {serviceName.toLowerCase()} services.
//         </p>
//       </div>

//       {/* GALLERY GRID */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {galleryImages.map((img, i) => (
//           <div
//             key={i}
//             className="w-full h-64 bg-contain bg-center rounded-xl shadow-lg "
//             style={{ backgroundImage: `url(${img})` }}
//           ></div>
//         ))}
//       </div>

//       {/* SUB CATEGORY TITLE */}
//       <h2
//         className="text-center text-3xl sm:text-4xl font-bold mt-16 mb-8
//        bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600
//        text-transparent bg-clip-text"
//       >
//         Our {serviceName} Categories
//       </h2>

//       {/* SUB CATEGORY CARDS */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
//         {subCategories.map((cat, idx) => (
//           <div
//             key={idx}
//             className="bg-[#111] rounded-2xl overflow-hidden shadow-xl border border-white/10
//             hover:border-yellow-500/40 transition-all duration-300"
//           >
//             <img
//               src={cat.image}
//               className="w-full h-96 object-contain"
//               alt=""
//             />

//             <div className="p-5">
//               <h3
//                 className="text-xl font-bold mb-2 bg-gradient-to-r
//               from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
//               >
//                 {cat.title}
//               </h3>

//               {/* BUTTONS */}
//               <div className="flex justify-between gap-3 mt-4">
//                 <button
//                   className="w-1/2 px-4 py-2 rounded-lg border border-yellow-500
//                  text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm"
//                 >
//                   View Detail
//                 </button>

//                 <button
//                   className="w-1/2 px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold
//                  hover:bg-yellow-400 transition-all duration-300 text-sm"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

// }

import Button from "../../common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MakeupCategories() {
  // MAIN SERVICE NAME
  const serviceName = "Makeup";

  // UPPER GALLERY IMAGES
  const galleryImages = [
    "/service/makeup/makeup1.webp",
    "/service/makeup/makeup2.webp",
    "/service/makeup/party2.webp",
    "/service/makeup/haldi2.webp",
    "/service/makeup/jaggo.jpg",
    "/service/makeup/haldi2.webp",
    "/service/makeup/haldi2.webp",
    "/service/makeup/haldi2.webp",
  ];

  const categories = [
    {
      name: "Bridal Makeup",
      img: "/service/makeup/makeup1.webp",
      price: "₹5500",
    },
    {
      name: "Party Makeup",
      img: "/service/makeup/party2.webp",
      price: "₹3500",
    },
    {
      name: "Haldi Makeup",
      img: "/service/makeup/haldi2.webp",
      price: "₹2500",
    },
    {
      name: "Engagement Makeup",
      img: "/service/makeup/reception.webp",
      price: "₹4500",
    },
    {
      name: "Haldi Makeup",
      img: "/service/makeup/haldi2.webp",
      price: "₹2500",
    },
  ];

  return (
    <section className="px-6 lg:px-16 ">
      {/* TOP HEADING */}
      <div className="text-center py-12">
        <h1
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00CED1] via-white-400 to-black text-transparent bg-clip-text "
          style={{ fontFamily: "Scheherazade New" }}
        >
          {serviceName}
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Explore our premium {serviceName.toLowerCase()} services.
        </p>
      </div>

      {/* 🔥 UPPER GALLERY SLIDER ADDED HERE */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-72 bg-cover bg-center bg-no-repeat border border-black rounded overflow-hidden
      transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2
        className="text-center text-3xl sm:text-4xl font-bold mt-16 mb-8
      bg-gradient-to-r from-[#00CED1] via-white-400 to-black text-transparent bg-clip-text"
        style={{ fontFamily: "Scheherazade New" }}
      >
        Our {serviceName} Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((item, index) => (
          <div key={index} className="group">
            {/* IMAGE */}
            <div
              className="w-full h-96 overflow-hidden border border-black rounded-md 
            transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TITLE */}
            <h2
              className="mt-3 text-xl font-semibold text-center"
              style={{ fontFamily: "Scheherazade New" }}
            >
              {item.name}
            </h2>

            {/* BUTTONS */}
            <div className="mt-4 w-[70%] mx-auto">
              <button className="w-full border border-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-50">
                View Detail
              </button>

              <Button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 mt-3 whitespace-nowrap">
                Book an Appointment
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
