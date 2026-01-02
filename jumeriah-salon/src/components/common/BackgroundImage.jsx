// src/components/common/BackgroundSection.jsx
export default function BackgroundSection({
  bgImage = "/banner4.jpeg",
  overlay = true,
  height = "630px",
  children,
}) {
  return (
    <div
      className={`relative w-full bg-cover bg-center bg-no-repeat`}
      style={{
        height,
        backgroundImage: `${
          overlay ? `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),` : ""
        } url('${bgImage}')`,
      }}
    >
      {children}
    </div>
  );
}
