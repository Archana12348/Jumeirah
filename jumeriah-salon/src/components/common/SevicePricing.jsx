import { servicesData } from "./servicesData";

export default function ServicesPage() {
  // Helper component for individual sections
  const Section = ({ title, services }) => (
    <div className="mb-12 break-inside-avoid">
      <h2 className="text-3xl font-serif text-slate-800 mb-6">{title}</h2>

      <div className="space-y-6">
        {services.map((item, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between w-full">
              <span className="font-semibold text-slate-800 text-lg">
                {item.title}
              </span>

              {/* Dotted line filler */}
              <span className="flex-1 border-b-2 border-dotted border-gray-300 mx-4 mb-1" />

              <span className="font-semibold text-slate-800 text-lg">
                {item.price}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // We manually separate data into Left Column and Right Column
  // Based on the array order: 0=TopLeft, 1=TopRight, 2=BotLeft, 3=BotRight
  const leftColumnData = [servicesData[0], servicesData[2]].filter(Boolean);
  const rightColumnData = [servicesData[1], servicesData[3]].filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Main Layout: Flex Row for Desktop, Stack for Mobile */}
      <div className="flex flex-col md:flex-row gap-20">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          {leftColumnData.map((cat, index) => (
            <Section key={index} title={cat.title} services={cat.services} />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col">
          {rightColumnData.map((cat, index) => (
            <Section key={index} title={cat.title} services={cat.services} />
          ))}
        </div>
      </div>

      {/* Button centered at the bottom */}
      <div className="mt-8 text-center">
        <button className="border border-black px-10 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
          Book Online
        </button>
      </div>
    </div>
  );
}
