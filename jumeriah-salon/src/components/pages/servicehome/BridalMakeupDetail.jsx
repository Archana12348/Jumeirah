import React from "react";

export default function BridalMakeupDetail() {
  return (
    <div className="w-full font-[poppins]">
      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-5 py-20 text-center animate-section">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#03686b] to-[#0a9b86] text-transparent bg-clip-text">
          About Bridal Makeup
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
          Our Bridal Makeup service is curated to bring out the perfect blend of
          elegance, glamour, and natural radiance. Using premium international
          products, expert techniques, and personalised styling, we ensure you
          look stunning both on-camera and in real life.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="lux-divider"></div>

      {/* GALLERY GRID */}
      <section className="max-w-6xl mx-auto px-5 py-20 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#03686b] to-[#0a9b86] text-transparent bg-clip-text text-center">
          Bridal Look Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-12">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div
              key={img}
              className="group rounded-2xl overflow-hidden relative shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={`/images/bridal-${img}.jpg`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                alt="Bridal Makeup"
              />

              {/* OVERLAY SHINE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="lux-divider"></div>

      {/* PACKAGES SECTION */}
      <section className="max-w-6xl mx-auto px-5 py-20 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#03686b] to-[#0a9b86] text-transparent bg-clip-text text-center">
          Bridal Makeup Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
          {[
            {
              title: "HD Bridal Makeup",
              price: "₹12,000 – ₹18,000",
              list: [
                "HD Foundation Base",
                "Premium Luxury Products",
                "Professional Hair Styling",
                "Draping & Jewellery Setting",
              ],
            },
            {
              title: "Airbrush Bridal Makeup",
              price: "₹20,000 – ₹28,000",
              list: [
                "Full Airbrush Base",
                "100% Waterproof Makeup",
                "High-End Luxury Products",
                "Hair Styling & Draping",
              ],
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg border border-[#c9a14a]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#c9a14a] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#03686b]">{pkg.title}</h3>
              <p className="text-[#c59d5f] mt-3 text-xl font-semibold">
                {pkg.price}
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {pkg.list.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c59d5f] text-xl">✔</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-5 py-20 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#03686b] to-[#0a9b86] text-transparent bg-clip-text text-center">
          FAQs
        </h2>

        <div className="mt-12 space-y-6">
          {[
            "Which products do you use?",
            "Does the makeup last all day?",
            "Is hairstyle included?",
            "Do you travel for bridal bookings?",
            "How early should I book?",
          ].map((q, i) => (
            <details
              key={i}
              className="p-5 border rounded-xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition group"
            >
              <summary className="cursor-pointer text-lg font-medium text-gray-800 flex justify-between items-center">
                {q}
                <span className="text-[#c59d5f] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                Yes, we use high-end luxury products ensuring long-lasting and
                flawless results.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-24 bg-gradient-to-r from-[#03686b]/15 via-white to-[#03686b]/15 animate-section">
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#03686b] to-[#0a9b86] text-transparent bg-clip-text">
          Ready For Your Bridal Transformation?
        </h2>

        <button className="mt-8 px-12 py-4 rounded-full bg-gradient-to-r from-[#c9a14a] to-[#d8b96a] text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Book an Appointment
        </button>
      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-section { animation: fadeUp 1s ease-out forwards; }

          .lux-divider {
            width: 100%;
            height: 2px;
            background: linear-gradient(
              to right,
              transparent,
              #c9a14a,
              transparent
            );
            opacity: 0.5;
          }
        `}
      </style>
    </div>
  );
}
