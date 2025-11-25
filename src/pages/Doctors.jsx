// src/pages/doctors.jsx
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import MoveUpOnRender from "../components/MoveUpOnRender";
import { doctors as localDoctors, specialityData } from "../assets/assets";

const Doctors = () => {
  const { speciality: specialityParam } = useParams();
  const { doctors: contextDoctors } = useContext(AppContext) || {};
  const navigate = useNavigate();

 
  const allProfessionals =
    Array.isArray(contextDoctors) && contextDoctors.length
      ? contextDoctors
      : Array.isArray(localDoctors)
      ? localDoctors
      : [];

  const [filteredSpecialists, setFilteredSpecialists] = useState(allProfessionals);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeCategory = specialityParam ? decodeURIComponent(specialityParam) : "";


  useEffect(() => {
    if (activeCategory) {
      const filtered = allProfessionals.filter(
        (doc) =>
          typeof doc.speciality === "string" &&
          doc.speciality.toLowerCase() === activeCategory.toLowerCase()
      );
      setFilteredSpecialists(filtered);
    } else {
      setFilteredSpecialists(allProfessionals);
    }
  }, [allProfessionals, activeCategory]);

 
  const handleCategorySelect = (category) => {
    if (!category || (activeCategory && activeCategory.toLowerCase() === category.toLowerCase())) {
      navigate("/doctors"); // Deselect
    } else {
      navigate(`/doctors/${encodeURIComponent(category)}`);
    }
   
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen">
      <MoveUpOnRender>
        
        <div className="py-10">
          <p className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-2">
            Connect with Experts
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find Your Specialist
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          
          
          <div className="w-full md:w-64 flex-shrink-0">
            
            <button
              className={`flex items-center gap-2 py-2 px-4 border rounded-full text-sm font-semibold transition-all md:hidden mb-4 ${
                isFilterOpen ? "bg-primary text-white border-primary" : "bg-white text-gray-600"
              }`}
              onClick={() => setIsFilterOpen((prev) => !prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>

          
            <div className={`flex-col gap-3 ${isFilterOpen ? "flex" : "hidden md:flex"}`}>
              <div
                onClick={() => handleCategorySelect("")}
                className={`cursor-pointer w-full px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-between group ${
                  !activeCategory
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                All Specialists
                {!activeCategory && <span className="w-2 h-2 bg-white rounded-full"></span>}
              </div>

              {specialityData.map((s) => {
                 const isActive = activeCategory.toLowerCase() === s.speciality.toLowerCase();
                 return (
                  <div
                    key={s.speciality}
                    onClick={() => handleCategorySelect(s.speciality)}
                    className={`cursor-pointer w-full px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-lg scale-105"
                        : "bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {s.speciality}
                    {isActive && <span className="w-2 h-2 bg-white rounded-full"></span>}
                  </div>
                );
              })}
            </div>
          </div>

         
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpecialists.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                   <p className="text-lg">No specialists found in this category.</p>
                </div>
              ) : (
                filteredSpecialists.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Image Area */}
                    <div className="relative h-60 bg-blue-50 overflow-hidden">
                       <img 
                          className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700" 
                          src={item.image} 
                          alt={item.name} 
                       />
                       
                       
                       <div className="absolute top-4 left-4">
                         <div className={`flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border ${item.available ? 'bg-white/90 border-green-100' : 'bg-gray-100/90 border-gray-200'}`}>
                            <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
                            <span className={`text-xs font-bold ${item.available ? 'text-green-600' : 'text-gray-500'}`}>
                               {item.available ? "Available" : "Booked"}
                            </span>
                         </div>
                       </div>
                    </div>

                  
                    <div className="p-6">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {item.speciality}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                         <span className="text-xs text-gray-400">Book Appointment</span>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                           <img src={item.image} className="hidden" alt="" /> {/* Dummy ref if needed, or stick to SVG */}
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                           </svg>
                         </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </MoveUpOnRender>
    </div>
  );
};

export default Doctors;