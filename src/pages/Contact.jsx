import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Contact = () => {
  return (
    <MoveUpOnRender id="contact">
      <div className="px-4 md:px-12 my-12">
        
       
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            We are here to help. Reach out to us for any queries.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          
         
          <div className="md:w-1/2 h-80 md:h-auto relative">
            <div className="absolute inset-0 bg-black/10 z-10"></div> 
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              src={assets.contact_image}
              alt="Medical Team Support"
            />
          </div>

        
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-8 bg-white">
            
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">
                Corporate Headquarters
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p>88 Innovation Drive, Suite 500</p>
                <p>San Francisco, CA, USA</p>
              </div>
              <div className="mt-4 text-gray-600 space-y-1">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">Tel:</span> +1 (628) 243-9810
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">Email:</span> support@medisync.com
                </p>
              </div>
            </div>

           
            <hr className="border-gray-200" />

            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wider text-sm">
                Join Our Team
              </h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Passionate about healthcare technology? We are always looking for talented individuals to join our mission.
              </p>
              
              <button className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-md hover:bg-black hover:scale-105 hover:shadow-lg transition-all duration-300">
                View Open Positions
              </button>
            </div>

          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default Contact;