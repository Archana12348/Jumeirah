"use client";

import { X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import LoginForm from "../pages/auth/LoginForm";
import SignupForm from "../pages/auth/SignupForm";

export default function LoginDrawer({ open, onClose }) {
  const [page, setPage] = useState("menu"); // menu | login | signup

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 h-screen bg-black/40 z-40 backdrop-blur-sm"
        ></div>
      )}

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] md:w-[400px] lg:w-[430px] 
        bg-white z-50 shadow-lg transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 bg-white border-b border-gray-200">
          <h2
            className="text-2xl font-bold text-[#00CED1]"
            style={{ fontFamily: "Scheherazade New" }}
          >
            La Vie Jumeriah
          </h2>

          <button
            onClick={() => {
              setPage("menu");
              onClose();
            }}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} className="text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {/* MENU PAGE */}
          {page === "menu" && (
            <div className="text-center mt-10">
              <h1
                className="text-3xl font-bold text-black"
                style={{ fontFamily: "Scheherazade New" }}
              >
                Welcome to La Vie Jumeriah
              </h1>

              <p
                className="text-gray-600 mt-2"
                style={{ fontFamily: "Scheherazade New" }}
              >
                Experience luxury & beauty in every moment
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4">
                {/* Login row */}
                <div
                  onClick={() => setPage("login")}
                  className="group w-full flex items-center justify-between text-black
                    border border-gray-300 px-4 py-3 rounded-xl cursor-pointer
                    bg-white shadow-md hover:shadow-xl 
                    transition-all duration-500 ease-in-out
                    hover:bg-gradient-to-r hover:from-[#00CED1] hover:to-black
                    hover:text-white hover:scale-[1.03]
                    hover:border-[#00CED1]/70"
                >
                  <span className="text-lg font-semibold group-hover:tracking-wide transition-all duration-500">
                    Login
                  </span>

                  <ChevronRight
                    size={22}
                    className="transition-all duration-500 group-hover:translate-x-1"
                  />
                </div>

                {/* Signup row */}
                <div
                  onClick={() => setPage("signup")}
                  className="group w-full flex items-center justify-between text-black
                    border border-gray-300 px-4 py-3 rounded-xl cursor-pointer
                    bg-white shadow-md hover:shadow-xl
                    transition-all duration-500 ease-in-out
                    hover:bg-gradient-to-r hover:from-[#00CED1] hover:to-black
                    hover:text-white hover:scale-[1.03]
                    hover:border-[#00CED1]/70"
                >
                  <span className="text-lg font-semibold group-hover:tracking-wide transition-all duration-500">
                    Sign Up
                  </span>

                  <ChevronRight
                    size={22}
                    className="transition-all duration-500 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* LOGIN PAGE */}
          {page === "login" && <LoginForm goSignup={() => setPage("signup")} />}

          {/* SIGNUP PAGE */}
          {page === "signup" && <SignupForm goLogin={() => setPage("login")} />}
        </div>
      </div>
    </>
  );
}
