import React from "react";

// Placeholder images - Replace these with your actual imports or URLs
const galleryImages = [
  // Row 1
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", // Makeup/Lips
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop", // Updo Hair
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", // Braided Hair
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", // Model Face
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop", // Blonde Updo

  // Row 2
  "https://images.unsplash.com/photo-1596472247752-1d900695f590?q=80&w=800&auto=format&fit=crop", // Skincare/Towel
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop", // Spa Products
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop", // Hair Cutting
  "https://images.unsplash.com/photo-1560066984-8187e2a1b25e?q=80&w=800&auto=format&fit=crop", // Hair Dyeing
  "https://images.unsplash.com/photo-1521590832169-d4612695990d?q=80&w=800&auto=format&fit=crop", // Styling
];

export default function GallerySection() {
  return (
    <div className="w-full bg-white py-16">
      {/* The Grid */}
      {/* Mobile: 2 columns, Desktop: 5 columns (matches your image) */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="relative overflow-hidden group h-64 w-full"
            >
              <img
                src={imgSrc}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional: Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* The Button */}
      <div className="text-center">
        <button className="border border-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300">
          Visit Our Gallery
        </button>
      </div>
    </div>
  );
}
