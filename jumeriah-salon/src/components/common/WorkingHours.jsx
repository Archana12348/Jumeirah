export default function WorkingHoursPage() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 py-16">
      {/* LEFT SIDE – TIME TABLE */}
      <div className="w-full">
        <div className="space-y-6">
          {[
            { day: "Mon – Wed", time: "10:00 AM – 9:00 PM" },
            { day: "Thursday", time: "10:00 AM – 7:30 PM" },
            { day: "Friday", time: "10:00 AM – 9:00 PM" },
            { day: "Sun – Sun", time: "10:00 AM – 5:00 PM" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-b border-gray-300 pb-4 flex items-center justify-between text-lg"
            >
              <span className="font-medium text-gray-700">{item.day}</span>
              <span className="text-gray-400">—</span>
              <span className="font-semibold text-gray-900">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE – TITLE + DESCRIPTION */}
      <div className="flex flex-col justify-start pt-2">
        <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
          Time Schedule
        </h4>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Working Hours</h1>

        <p className="text-gray-600 leading-relaxed text-lg">
          Nemo ipsam egestas volute turpis varius ipsum egestas purus diam
          ligula sapien ultrice sapien tempor aliquam tortor ipsum and augue
          turpis quaerat aliquet congue and molestie magna in congue undo
          aliquet congue ultrices quaerat.
        </p>
      </div>
    </div>
  );
}
