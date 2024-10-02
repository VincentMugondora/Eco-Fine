import Image1 from "/images/service-1.jpg";
import Image2 from "/images/service (2).jpg";
import Image3 from "/images/service (3).jpg";

const ServicesSection = () => {
  return (
    <section className="bg-[#f8f8f0] py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-green-500 text-sm uppercase mb-2">Our Services</h3>
        <h2 className="text-2xl md:text-4xl font-bold">
          Preserving The Earth For Future Generations
        </h2>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src={Image1}
            alt="Carbon Offsetting"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <p className="text-gray-500 text-sm mb-1">Service 01</p>
            <h4 className="text-lg font-semibold">Carbon Offsetting</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src={Image2}
            alt="E-Waste Recycling"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <p className="text-gray-500 text-sm mb-1">Service 02</p>
            <h4 className="text-lg font-semibold">E-Waste Recycling</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src={Image3}
            alt="Water Conservation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <p className="text-gray-500 text-sm mb-1">Service 03</p>
            <h4 className="text-lg font-semibold">Water Conservation</h4>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="flex flex-wrap justify-center mt-12 space-x-4">
        <img src="/images/logo1.png" alt="Partner 1" className="h-12" />
        <img src="/images/logo2.png" alt="Partner 2" className="h-12" />
        <img src="/images/logo3.png" alt="Partner 3" className="h-12" />
        <img src="/images/logo4.png" alt="Partner 4" className="h-12" />
      </div>
    </section>
  );
};

export default ServicesSection;
