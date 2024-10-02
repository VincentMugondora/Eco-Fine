import { Link } from "react-router-dom";
import PlantImage from "/images/hero-5-1.jpg";
import { MdOutlineDoubleArrow } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="bg-[#00252F] hero relative h-[80vh] flex items-center justify-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20">
        {/* Text Section */}
        <div className="text-white  lg:text-left max-w-lg">
          <p className="uppercase lg:text-left text-green-500 md:text-2xl font-semibold mb-2 tracking-wide">
            Be Natural
          </p>
          <h1 className="text-4xl md:text-6xl  lg:text-left md:leading-[70px] poppins-semibold mb-4">
            Preserving the earth for future generations
          </h1>
          <p className="text-gray-300  lg:text-left poppins-regular mb-6">
            One important area of ecology is conservation biology, which focuses
            on protecting endangered species and ecosystems.
          </p>
          <Link
            to="/discover"
            className="bg-green-500 btns inline-flex items-center gap-1 text-white px-6 py-3 rounded-lg no-underline poppins-semibold
            hover:text-black"
          >
            Discover More
            <MdOutlineDoubleArrow className="arrows" />
          </Link>
        </div>

        {/* Image Section */}
        <div className="hidden mt-[90px] absolute right-0 bottom-0 lg:block">
          <img src={PlantImage} alt="Plant" className="w-[40vw] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
