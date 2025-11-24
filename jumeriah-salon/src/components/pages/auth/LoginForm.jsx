"use client";

export default function LoginForm({ goSignup }) {
  return (
    <div
      className="w-full flex flex-col items-center mt-10"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      {/* Welcome Message */}
      <h2
        className="text-2xl font-bold  mb-6 text-center bg-gradient-to-r from-[#00CED1] via-white-400 to-gray-800 text-transparent bg-clip-text"
        style={{ fontFamily: "Scheherazade New" }}
      >
        Welcome Back! Login to Continue
      </h2>

      {/* Form */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Email */}
        <label className="text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg placeholder:text-gray-500 px-3 py-2 w-full border-[#00CED1] outline-none"
        />

        {/* Password */}
        <label className="text-sm font-semibold text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border rounded-lg px-3 py-2 w-full placeholder:text-gray-500 border-[#00CED1] outline-none"
        />

        {/* Forgot Password */}
        <p className="text-sm text-right text-[#00CED1] cursor-pointer hover:underline mt-[-6px]">
          Forgot Password?
        </p>

        {/* Login button */}
        <button
          className="w-full bg-[#00CED1] bg-gradient-to-r from-[#00CED1] to-black
      text-white scale-[1.03]
      hover:border-[#00CED1]/70  font-semibold py-2 rounded-lg hover:bg-[#0fbec4] transition"
        >
          Login
        </button>

        {/* Signup switch */}
        <p className="text-center text-sm mt-4 text-black">
          Don't have an account?{" "}
          <span
            onClick={goSignup}
            className="text-[#00CED1] cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
