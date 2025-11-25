import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const About = () => {
  return (
    <MoveUpOnRender id="about">
      <div className="px-4 md:px-10 my-12">
        
        
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-primary underline decoration-4 decoration-primary/30">Us</span>
          </h2>
        </div>

       
        <div className="flex flex-col lg:flex-row gap-16 items-center my-10">
          
       
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 transform translate-x-2 translate-y-2"></div>
            <img
              className="w-full h-auto relative rounded-2xl shadow-xl z-10 hover:scale-[1.02] transition-transform duration-500"
              src={assets.about_image}
              alt="Healthcare professionals"
            />
          </div>

          <div className="flex flex-col justify-center gap-8 lg:w-2/3 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Welcome to <span className="font-bold text-gray-800">MediSync</span>, where we are redefining the pathway to better health. We recognize that navigating the healthcare system can often be complex and time-consuming. Our mission is to simplify this journey, placing control firmly back in your hands.
            </p>
            <p className="text-base">
              We leverage cutting-edge technology to bridge the gap between patients and medical experts. Whether you are scheduling a routine check-up or seeking specialized consultation, our platform ensures a seamless, transparent, and efficient experience tailored to your unique needs.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
              <b className="text-xl text-gray-900 block mb-2">Our Vision</b>
              <p className="italic text-gray-600">
                "To create a world where quality healthcare is accessible instantly, removing barriers and fostering a community of wellness and trust."
              </p>
            </div>
          </div>
        </div>

       
        <div className="my-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-left md:text-center">
            Why Choose <span className="text-primary">MediSync?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Streamlined Efficiency
              </h4>
              <p className="text-gray-500 text-sm leading-6">
                Say goodbye to long wait times. Our intelligent scheduling system fits perfectly into your busy lifestyle, allowing you to book appointments in seconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Verified Specialists
              </h4>
              <p className="text-gray-500 text-sm leading-6">
                Your health is non-negotiable. We provide access to a rigorously vetted network of top-tier medical professionals across various specialties.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Patient-Centric Care
              </h4>
              <p className="text-gray-500 text-sm leading-6">
                We believe in healthcare that listens. Receive personalized reminders, health tips, and a user experience designed entirely around your well-being.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default About;