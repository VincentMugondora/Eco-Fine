import { FaCheckCircle } from "react-icons/fa";
import Image1 from "/images/about-1.jpg"; 
import Image2 from "/images/about-2.jpg"; 

const EcoFriendlyComponent = () => {
  return (
    <section className="bg-white py-10 px-5 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Images */}
        <div className="relative">
          <div className="border-l-4 border-green-600">
            <img
              src={Image1}
              alt="Woman Recycling"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute bottom-5 left-5 w-48 h-48">
            <img
              src={Image2}
              alt="Recycling with Play Button"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side: Text and Icons */}
        <div>
          <h3 className="text-green-500 text-sm uppercase mb-2">About With Us</h3>
          <h2 className="text-4xl font-bold mb-6">The true supporter of eco-friendliness</h2>

          <div className="space-y-5">
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">E-Waste Recycling</h4>
                <p className="text-gray-600">
                  The goal of ecology is to understand how organisms interact with each
                  other and their environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">Natural Cleaners</h4>
                <p className="text-gray-600">
                  Ecologists use various methods, such as field observations, experiments, 
                  and modeling, to study the complex interactions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">Ecology is crucial</h4>
                <p className="text-gray-600">
                  Ecology is a crucial field that helps us understand the impact of human activities 
                  on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlyComponent;
