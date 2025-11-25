import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-6 py-20 text-gray-900"
    >
      
      <h1 className="text-4xl font-bold tracking-tight">Explore Specialists</h1>
      <p className="sm:w-1/2 lg:w-1/3 text-center text-gray-500 text-sm leading-relaxed">
        Connect with the right expert for your needs. Browse our extensive directory of board-certified professionals tailored to your health requirements.
      </p>

      
      <div className="flex sm:justify-center gap-8 pt-10 w-full overflow-x-scroll no-scrollbar px-4 pb-6">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="group flex flex-col items-center text-xs cursor-pointer flex-shrink-0 min-w-[80px] hover:-translate-y-2 transition-all duration-300"
          >
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gray-50 rounded-full shadow-sm group-hover:shadow-lg group-hover:bg-primary/10 transition-all duration-300 mb-3 overflow-hidden border border-gray-100">
              <img 
                className="w-12 sm:w-16 object-contain group-hover:scale-110 transition-transform duration-300" 
                src={item.image} 
                alt={item.speciality} 
              />
            </div>
            
            
            <p className="text-gray-600 font-medium group-hover:text-primary transition-colors duration-300">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;