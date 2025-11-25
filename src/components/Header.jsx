import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative flex flex-col md:flex-row flex-wrap bg-primary rounded-3xl px-6 md:px-10 lg:px-16 overflow-hidden my-4 shadow-xl">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      {/* Left Side: Content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 z-10 md:py-[6vw]">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-snug tracking-tight">
          Expert Healthcare, <br />
          <span className="text-gray-100 opacity-90 font-normal">Simplified.</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white text-sm font-light">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
             <img className="w-24" src={assets.group_profiles} alt="User reviews" />
          </div>
          <p className="leading-relaxed max-w-xs">
            Browse our network of certified specialists and secure your consultation effortlessly.
          </p>
        </div>

        <a
          href="#speciality"
          className="mt-4 flex items-center gap-3 bg-white px-8 py-4 rounded-full text-gray-700 text-sm font-semibold shadow-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out"
        >
          Reserve Appointment
          <img className="w-3 opacity-80" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right Side: Hero Image */}
      <div className="md:w-1/2 flex items-end justify-center relative z-10">
        <img
          className="w-full h-auto rounded-xl drop-shadow-2xl object-cover transform translate-y-4 md:translate-y-0"
          src={assets.header_img}
          alt="Doctor Appointment Header"
        />
      </div>
    </div>
  );
};

export default Header;