// // GoldBlackButton.jsx
// import React from "react";

// export default function Button({
//   children = "Click",
//   className = "",
//   onClick,
//   disabled = false,
//   ...props
// }) {
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`relative inline-flex items-center justify-center px-5 py-2.5
//         font-semibold text-white rounded-full shadow-lg transition-all
//         hover:-translate-y-1 active:translate-y-0
//         focus:outline-none focus:ring-4 focus:ring-cyan-300/30
//         disabled:opacity-50 disabled:cursor-not-allowed
//         ${className}
//       `}
//       style={{
//         background: "linear-gradient(90deg, #F8E7A1 0%, #ffffff 100%)",
//         color: "#5A4A00",
//         // dark teal text for contrast
//       }}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
// GoldBlackButton.jsx
import React from "react";

export default function Button({
  children = "Click",
  className = "",
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center px-6 py-2.5
        font-semibold rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)]
        transition-all duration-300 ease-out 
        hover:shadow-[0_6px_20px_rgba(255,215,0,0.6)]
        hover:-translate-y-1 active:translate-y-0
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-4 focus:ring-yellow-300/30
        ${className}
      `}
      style={{
        background:
          "linear-gradient(135deg, #8B6508 0%, #DAA520 30%, #FFD700 60%, #8B6508 100%)",
        color: "#2E2102",
      }}
      {...props}
    >
      {/* Golden Shine Overlay */}
      <span
        className="absolute inset-0 rounded-full opacity-20 
        bg-gradient-to-r from-white/40 via-transparent to-transparent 
        blur-[1px] pointer-events-none"
      ></span>

      {/* Button Text */}
      {children}

      {/* Shine Hover Animation */}
      <span
        className="absolute left-0 top-0 h-full w-2 bg-white/60 blur-[8px] 
        rounded-full opacity-0 hover:opacity-40 transition-all duration-500
        hover:translate-x-full"
      ></span>
    </button>
  );
}
