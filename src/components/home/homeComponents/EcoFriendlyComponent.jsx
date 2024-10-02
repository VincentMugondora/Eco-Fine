import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import Image1 from "/images/about-1.jpg";
import Image2 from "/images/about-2.jpg";
import Leaf from "/images/leaf (1).jpg"
import Leaf1 from "/images/leaf (2).jpg"

const EcoFriendlyComponent = () => {
  return (
    <section className="relative py-10 px-5 lg:px-20">
      <div className="container z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Images */}
        <div className="relative">
          {/* Image 1: Bigger and occupies a defined width */}
          <div className="w-full lg:max-w-[80%] mx-auto relative">
            <img
              src={Image1}
              alt="Woman Recycling"
              className="w-full h-auto rounded-lg"
            />

            {/* Image 2: Smaller and overlaps the left side of Image 1 */}
            <div className="absolute top-3/4 left-[-15%] transform -translate-y-1/2 w-48 h-48 animate-updown">
              <img
                src={Image2}
                alt="Recycling with Play Button"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlayCircle className="text-green-500 bg-white rounded-full text-6xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text and Icons */}
        <div className="z-40">
          <h3 className="text-green-500 poppins-semibold text-sm uppercase lg:text-xl mb-2">
            About With Us
          </h3>
          <h2 className="lg:text-6xl poppins-bold mb-6">
            The true supporter of eco-friendliness
          </h2>

          <div className="space-y-5">
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">E-Waste Recycling</h4>
                <p className="text-gray-600">
                  The goal of ecology is to understand how organisms interact
                  with each other and their environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">Natural Cleaners</h4>
                <p className="text-gray-600">
                  Ecologists use various methods, such as field observations,
                  experiments, and modeling, to study the complex interactions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <div>
                <h4 className="text-lg font-bold">Ecology is crucial</h4>
                <p className="text-gray-600">
                  Ecology is a crucial field that helps us understand the impact
                  of human activities on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-full h-full bg-black opacity- top-0 right-0"></div> */}
      <div className="absolute top-0 right-9">
        <img src={Leaf} alt="Leaf" className="w-32 z-0" />
      </div>
     <div>
       <img src={Leaf1} alt="Leaf" className="transform rotate-180" />
     </div>
      </div>
    </section>
  );
};

export default EcoFriendlyComponent;
