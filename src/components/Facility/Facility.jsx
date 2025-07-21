import {
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaShuttleVan,
  FaLock,
} from "react-icons/fa";

const Facility = () => {
  const features = [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaSwimmingPool />, label: "Swimming Pool" },
    { icon: <FaConciergeBell />, label: "24/7 Room Service" },
    { icon: <FaParking />, label: "Free Parking" },
    { icon: <FaUtensils />, label: "Restaurant" },
    { icon: <FaDumbbell />, label: "Fitness Center" },
    { icon: <FaShuttleVan />, label: "Airport Shuttle" },
    { icon: <FaLock />, label: "Secure Rooms" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container">
        <h2 className="sm:text-[20px] md:text-[26px] lg:text-[35px] uppercase font-bold text-center text-gray-800  mb-12">
          Our Premium Facilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-2 border-yellow-500 items-center justify-center bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all duration-300 group"
            >
              <div className="text-4xl text-yellow-500 group-hover:text-indigo-700 mb-4 transition-colors duration-300">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
