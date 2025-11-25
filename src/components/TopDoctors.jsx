
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctors as localDoctors } from "../assets/assets";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors: contextDoctors } = useContext(AppContext) || {};

  // Logic: Prioritize context data, fall back to local, default to empty array
  const medicalExperts =
    Array.isArray(contextDoctors) && contextDoctors.length
      ? contextDoctors
      : Array.isArray(localDoctors)
      ? localDoctors
      : [];

  const topTen = medicalExperts.slice(0, 10);

  return (
    <section className="flex flex-col items-center gap-8 py-16 text-gray-900 md:mx-10">
      
    
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Highly Recommended
        </h1>
        <p className="w-full max-w-md mx-auto text-sm text-gray-500 leading-relaxed">
          Secure your appointment with industry-leading experts. <br className="hidden sm:block"/> 
          Our verified doctors are ready to assist.
        </p>
      </div>

      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 px-4 sm:px-0 pt-8">
        {topTen.map((item) => (
          <article
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="group relative flex flex-col bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            
            <div className="relative w-full h-56 bg-blue-50 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
              />
              
          
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}></span>
                <span className={`text-xs font-semibold ${item.available ? 'text-emerald-600' : 'text-gray-500'}`}>
                   {item.available ? "Available" : "Booked"}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-primary uppercase tracking-wide opacity-80">
                  {item.speciality}
                </p>
                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
              
            
              <div className="w-full h-px bg-gray-100 my-1"></div>

              <div className="flex items-center justify-between mt-auto">
                 <span className="text-xs text-gray-500 font-light">
                   {item.experience || "Expert"} Experience
                 </span>
                 
                 <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                 </span>
              </div>
            </div>
          </article>
        ))}
      </div>

     
      <button
        onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
        }}
        className="mt-10 px-10 py-3 rounded-full bg-gray-50 text-gray-600 text-sm font-semibold border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm"
      >
        View All Specialists
      </button>
    </section>
  );
};

export default TopDoctors;