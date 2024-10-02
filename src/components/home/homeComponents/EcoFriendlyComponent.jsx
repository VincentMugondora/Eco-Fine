import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import Image1 from "/images/about-1.jpg";
import Image2 from "/images/about-2.jpg";

const EcoFriendlyComponent = () => {
  return (
    <section className="bg-white py-10 px-5 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Images */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Image 1: Smaller and floated to the right, responsive width */}
          <div className="relative lg:w-2/3 w-full border-l-4 border-green-600">
            <img
              src={Image1}
              alt="Woman Recycling"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Image 2: Moves up and down */}
          <div className="absolute bottom-5 left-0 md:left-5 lg:w-48 w-32 h-32 md:h-48 md:w-48 animate-updown">
            <img
              src={Image2}
              alt="Recycling with Play Button"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="text-green-500 text-4xl md:text-6xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Side: Text and Icons */}
        <div className="text-center lg:text-left">
          <h3 className="text-green-500 text-sm uppercase mb-2">
            About With Us
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            The true supporter of eco-friendliness
          </h2>

          <div className="space-y-5">
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-base md:text-lg font-bold">
                  E-Waste Recycling
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  The goal of ecology is to understand how organisms interact
                  with each other and their environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-base md:text-lg font-bold">
                  Natural Cleaners
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Ecologists use various methods, such as field observations,
                  experiments, and modeling, to study the complex interactions.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-base md:text-lg font-bold">
                  Ecology is crucial
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Ecology is a crucial field that helps us understand the impact
                  of human activities on the environment.
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
