import { FaLeaf, FaSolarPanel, FaRecycle, FaShoppingBag } from "react-icons/fa";

const StepsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-green-500 text-sm uppercase mb-2 tracking-wide">
          4 Step Process
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Go Green And Reduce <br /> Your Carbon Footprint
        </h2>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-8 lg:space-x-16">
        {/* Step 1 */}
        <div className="relative text-center bg-[#f8f8f0] p-6 rounded-full shadow-lg w-52 h-52 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            01
          </div>
          <FaLeaf className="text-green-500 text-6xl mb-4" />
          <h4 className="font-bold text-lg text-gray-800">Sustain Solutions</h4>
        </div>

        {/* Step 2 */}
        <div className="relative text-center bg-[#f8f8f0] p-6 rounded-full shadow-lg w-52 h-52 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            02
          </div>
          <FaSolarPanel className="text-green-500 text-6xl mb-4" />
          <h4 className="font-bold text-lg text-gray-800">Renewable Energy</h4>
        </div>

        {/* Step 3 */}
        <div className="relative text-center bg-[#f8f8f0] p-6 rounded-full shadow-lg w-52 h-52 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            03
          </div>
          <FaRecycle className="text-green-500 text-6xl mb-4" />
          <h4 className="font-bold text-lg text-gray-800">Green Building</h4>
        </div>

        {/* Step 4 */}
        <div className="relative text-center bg-[#f8f8f0] p-6 rounded-full shadow-lg w-52 h-52 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            04
          </div>
          <FaShoppingBag className="text-green-500 text-6xl mb-4" />
          <h4 className="font-bold text-lg text-gray-800">Sustainable</h4>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
