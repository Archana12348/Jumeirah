export default function FeaturesSection() {
  const features = [
    {
      title: "Pre Booking",
      icon: "/icon1.avif", // apna icon yaha lagao
    },
    {
      title: "Online Booking",
      icon: "/icon1.avif", // apna icon yaha lagao
    },
    {
      title: "Luxury Service",
      icon: "/icon1.avif", // apna icon yaha lagao
    },
  ];

  return (
    <div
      className="w-full py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/bbbb.jpeg')",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        style={{ fontFamily: "var(--font-heading--family)" }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center items-start justify-start gap-3"
          >
            {/* ICON + TEXT */}
            <div className="flex items-center gap-3">
              <div className="  rounded-full  shadow-md flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="" />
              </div>

              <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
