"use client";

export default function SignupForm({ goLogin }) {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* Welcome Message */}
      <h2
        className="text-2xl font-bold  mb-6 text-center bg-gradient-to-r from-[#00CED1] via-white-400 to-gray-800 text-transparent bg-clip-text"
        style={{ fontFamily: "Scheherazade New" }}
      >
        Welcome! Create Your Account
      </h2>

      {/* Form */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Name */}
        <label className="text-sm font-semibold text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg px-3 py-2 placeholder:text-gray-500 w-full border-[#00CED1] outline-none"
        />

        {/* Email */}
        <label className="text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg px-3 py-2 w-full placeholder:text-gray-500 border-[#00CED1] outline-none"
        />

        {/* Password */}
        <label className="text-sm font-semibold text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg px-3 py-2 w-full placeholder:text-gray-500 border-[#00CED1] outline-none"
        />

        {/* Signup */}
        <button
          className="w-full bg-[#00CED1]  bg-gradient-to-r from-[#00CED1] to-black
      text-white scale-[1.03]
      hover:border-[#00CED1]/70  font-semibold py-2 rounded-lg hover:bg-[#0fbec4] transition"
        >
          Sign Up
        </button>

        {/* Login switch */}
        <p className="text-center text-black text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={goLogin}
            className="text-[#00CED1] cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
