import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterPage() {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat bottom-0 left-0 right-0 z-0 border-t-2 mt-10 
                 text-gray-200 font-serif  relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/ky footer banner.jpg')`,
      }}
    >
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-20 px-6">
        {/* Location */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Our Location
          </h2>
          <p className="font-semibold mt-2">India Office</p>
          <p>📍 Address: Lavie Jumeirah PPR Market,</p>
          <p>Shop No. A1 Mithapur Road,</p> Jalandhar, Punjab
          {/* <p className="font-semibold mt-4">Dubai Office</p>
          <p>Dubai Marina</p>
          <p>United Arab Emirates</p> */}
        </div>

        {/* Contact */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Get in Touch
          </h2>
          <p>phone: +91 90413 69160</p>
          <p>kylaviejum@gmail.com</p>

          <div className="flex items-center justify-center gap-4 mt-4 text-xl">
            <FaFacebookF
              className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              size={22}
            />
            <FaInstagram
              className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
              size={22}
            />
          </div>
        </div>

        {/* Working Hours */}
        <div className="transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Working Hours
          </h2>
          <p>Regular: 9:00 AM – 9:00 PM</p>
          <p>Winter: 10:00 AM – 8:00 PM</p>
        </div>
      </div>

      <hr className="border-gray-400" />

      {/* Social Icons */}
      <div className="py-10 flex items-center justify-center gap-8 text-2xl">
        <FaFacebookF
          className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaTwitter
          className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaInstagram
          className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
          size={22}
        />
        <FaYoutube
          className="hover:text-red-500 transition-colors duration-300 cursor-pointer"
          size={22}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest mb-8 px-4">
        {["ABOUT", "SERVICES", "TEAM", "GALLERY", "BLOG", "CONTACT"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white hover:underline transition duration-300"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm pb-10">
        Copyright 2025 Powered By KY. All right reserved
      </p>
    </div>
  );
}

{
  /* <div class="row justify-content-center mb-5">
  <div class="col-md-8">
    <label
      class="fw-semibold mb-3 d-block"
      style="color:#228b22; font-size:1.1rem;"
    >
      Upload Images
    </label>

    <div
      id="uploadBox"
      class="position-relative border border-2 border-success rounded-3 p-5 text-center"
      style="background: linear-gradient(135deg, #f8fbff 0%, #f1fff8 100%);
            transition: all 0.3s ease; cursor: pointer; width:300px;"
      ondragover="this.style.backgroundColor='#ecfdf3'"
      ondragleave="this.style.backgroundColor='#f8fbff'"
    >
      <div class="mb-3">
        <i
          class="fa fa-cloud-upload-alt text-success"
          style="font-size: 48px;"
        ></i>
      </div>

      <h6 class="text-muted mb-1">Drag & drop images here</h6>
      <p class="text-muted mb-0">or click to browse from your device</p>

      <input id="imageInput" type="file" multiple />
    </div>

    <div
      id="preview"
      style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;"
    ></div>
  </div>
</div>; */
}
