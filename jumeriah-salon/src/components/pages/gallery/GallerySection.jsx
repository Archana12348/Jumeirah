import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Button from "../../common/Button";

export default function SalonSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#00CED1] py-20 px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* LEFT IMAGE SLIDER */}
        <div className="w-full mt-10 lg:mt-16 flex justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-[90%] h-[500px] rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/gallery/gallery1.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/gallery/gallery2.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/gallery/gallery1.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* CENTER CONTENT */}
        <div className="text-white space-y-6 flex flex-col items-center text-center">
          <small className="tracking-widest text-black font-semibold text-xs">
            EVERY PERSON IS AN INDIVIDUAL
          </small>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
            WE TAKE GREAT PRIDE <br /> IN OUR CRAFT
          </h1>

          <video
            className="w-[90%] h-[320px] lg:h-[450px] rounded-xl border border-white object-cover shadow-xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/gallery/video.mp4" type="video/mp4" />
          </video>

          <p className="text-black leading-relaxed text-center px-4">
            Tired of spending endless hours searching for the right stylists? We
            understand the challenges salon owners face. Our personalized hiring
            and onboarding solutions make building your dream salon team
            effortless.
          </p>

          <ul className="space-y-2 text-black text-center">
            <li>✓ We match top stylists to your salon needs.</li>
            <li>✓ We train new team to shine from day one.</li>
          </ul>

          <Button className="mt-4 px-6 py-3 bg-[#c1a977] text-black rounded-full font-semibold hover:bg-white transition">
            Readmore →
          </Button>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="w-full mt-10 lg:mt-16 flex justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-[90%] h-[500px] rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/gallery/gallery2.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/gallery/gallery1.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/gallery/gallery2.PNG"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
