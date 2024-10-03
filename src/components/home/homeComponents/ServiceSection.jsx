import Image1 from "/images/service-1.jpg";
import Image2 from "/images/service (2).jpg";
import Image3 from "/images/service (3).jpg";

const services = [
  {
    id: 1,
    image: Image1,
    title: "Carbon Offsetting",
    description: "Service 01",
  },
  {
    id: 2,
    image: Image2,
    title: "E-Waste Recycling",
    description: "Service 02",
  },
  {
    id: 3,
    image: Image3,
    title: "Water Conservation",
    description: "Service 03",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f8f8f0] py-12 relative px-4">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm uppercase mb-2">
            Our Services
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold">
            Preserving The Earth For Future Generations
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white relative lg:h-[50vh] rounded-lg shadow-lg"
            >
              <div className="overflow-hidden rounded-lg w-full h-full">
                <img src={service.image} alt={service.title} className="h-full object-cover " />
              </div>
              <div className="p-6 absolute lg:w-[90%] bg-white -bottom-14 w-full left-1/2 transform -translate-x-1/2 hover:bg-[#00B150] text-center transition duration-500">
                <p className="text-gray-500 lg:mt-10 text-sm mb-1">
                  {service.description}
                </p>
                <h4 className="text-lg lg:mb-10 font-semibold">
                  {service.title}
                </h4>
                <div className="w-full lg:w-[115%] lg:-ml-6 lg:-mb-6 h-[4px] bg-[#00B150]"></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src="/images/service-shape1-1.png" alt="branch" className="absolute top-0 branch right-0" />
          <img src="/images/service-shape1-2.png" alt="branch" className="absolute branch-one top-0 left-0" />
        </div>

        {/* Partner Logos Section */}
        <div className="flex flex-wrap container justify-between mt-32 space-x-4">
          <img src="/images/4-1 (1).png" alt="Partner 1" className="w-52 object-contain" />
          <img src="/images/4-2 (1).jpg" alt="Partner 1" className="w-52 object-contain" />
          <img src="/images/4-3 (1).jpg" alt="Partner 1" className="w-52 object-contain" />
          <img src="/images/4-4 (1).jpg" alt="Partner 1" className="w-52 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
