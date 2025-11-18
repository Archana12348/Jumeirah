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
      className={`relative inline-flex items-center justify-center px-5 py-2.5
        font-semibold text-white rounded-full shadow-lg transition-all
        hover:-translate-y-1 active:translate-y-0
        focus:outline-none focus:ring-4 focus:ring-cyan-300/30
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background: "linear-gradient(90deg, #F8E7A1 0%, #ffffff 100%)",
        color: "#5A4A00",
        // dark teal text for contrast
      }}
      {...props}
    >
      {children}
    </button>
  );
}
