import React from "react";
import WorkingHoursPage from "../common/WorkingHours";
import ServicesPage from "../common/SevicePricing";
import Festival from "../common/Festival";
import GallerySection from "../common/Gallery";
import LocationsSection from "../common/Location";

export default function ContactPage() {
  return (
    <>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_2fr] gap-12 px-6 mt-60 md:w-[90%] lg:w-[85%] xl:w-[80%] font-serif text-gray-700">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Location:</h2>
          {/* India Location */}
          <p className="font-semibold mt-2">India Office</p>
          <p>Mumbai, 400001</p>
          <p>Marine Drive, Maharashtra</p>

          {/* Dubai Location */}
          <p className="font-semibold mt-4">Dubai Office</p>
          <p>Dubai Marina</p>
          <p>United Arab Emirates</p>

          <h2 className="text-3xl font-semibold mt-10 mb-4">Salon Hours:</h2>
          <p>Mon — Wed: 10:00AM - 9:00PM</p>
          <p>Thursday: 10:00 AM - 7:30 PM</p>
          <p>Friday: 10:00 AM - 9:00 PM</p>
          <p>Sun - Sun: 11:00 AM - 5:00 PM</p>
        </div>

        {/* Right Section */}
        <div className="border-l pl-12">
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <input
              type="text"
              placeholder="Your Name*"
              className="border-b w-full py-3 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="border-b w-full py-3 outline-none text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="What’s this about?"
            className="border-b w-full py-3 mt-6 outline-none text-sm"
          />

          <textarea
            placeholder="Your Message ..."
            className="border-b w-full py-3 mt-6 outline-none text-sm h-32"
          ></textarea>

          <div className="flex justify-end mt-8">
            <button className="border px-8 py-3 tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
      {/* <WorkingHoursPage />
      <ServicesPage /> */}
      <Festival />
      <GallerySection />
      <LocationsSection />
    </>
  );
}
