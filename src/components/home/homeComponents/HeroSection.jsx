import { Link } from "react-router-dom";
import PlantImage from "/images/hero-5-1.jpg"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="bg-[#00254F] h-[90vh] flex items-center justify-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20">
        {/* Text Section */}
        <div className="text-white max-w-lg">
          <p className="uppercase text-green-500 font-semibold mb-2 tracking-wide">
            Be Natural
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Preserving the earth for future generations
          </h1>
          <p className="text-gray-300 mb-6">
            One important area of ecology is conservation biology, which focuses
            on protecting endangered species and ecosystems.
          </p>
          <Link
            to="/discover"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            Discover More
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src={PlantImage}
            alt="Plant"
            className="w-full h-auto max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
