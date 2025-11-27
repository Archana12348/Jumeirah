// src/components/common/BackgroundSection.jsx
export default function BackgroundSection({
  bgImage = "/banner2.jpg",
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
          overlay ? `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),` : ""
        } url('${bgImage}')`,
      }}
    >
      {children}
    </div>
  );
}
