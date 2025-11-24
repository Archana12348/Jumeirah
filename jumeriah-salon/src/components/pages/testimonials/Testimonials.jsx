import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  const reviews = [
    {
      name: "Aarushi Mehta",
      text: "La Vie Jumeirah ने मेरी skin को एकदम glow दे दिया! Staff बहुत professional था और ambience super relaxing.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
    },
    {
      name: "Simran Kaur",
      text: "Facial service amazing था! मेरी skin पहले से ज़्यादा healthy और fresh लग रही है. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    },
    {
      name: "Neha Sharma",
      text: "Best salon experience! Premium service, luxury ambiance aur super friendly staff.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center  text-black"
          style={{ fontFamily: "Scheherazade New" }}
        >
          Client Testimonials
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Your beauty, our priority
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-lg rounded-2xl border border-[#00CED1]/20 p-6 h-full flex flex-col hover:shadow-2xl duration-300">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00CED1]"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="text-[#FFD700] fill-[#FFD700]"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  “{review.text}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
