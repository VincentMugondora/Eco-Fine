import { FaLeaf, FaSolarPanel, FaRecycle, FaShoppingBag } from "react-icons/fa";

const StepProcess = () => {
  const stepsData = [
    {
      id: 1,
      title: "Sustain Solutions",
      icon: <FaLeaf className="text-green-500 text-4xl" />,
      image: "/images/process-arrow1-1.png",
    },
    {
      id: 2,
      title: "Renewable Energy",
      icon: <FaSolarPanel className="text-green-500 text-4xl" />,
      image: "/images/process-arrow1-2.png",
    },
    {
      id: 3,
      title: "Green Building",
      icon: <FaRecycle className="text-green-500 text-4xl" />,
      image: "/images/process-arrow1-1.png",
    },
    {
      id: 4,
      title: "Sustainable Shopping",
      icon: <FaShoppingBag className="text-green-500 text-4xl" />,
    },
  ];

  return (
    <section className="bg-white relative py-12 px-4 lg:px-16">
      <div className="container pt-32">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm uppercase mb-2">
            4 Step Process
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold">
            Go Green And Reduce Your Carbon Footprint
          </h2>
        </div>

        {/* Steps Section */}
        <div className="grid mt-32 grid-cols-1 lg:grid-cols-4 items-start">
          {stepsData.map(({ id, title, icon, image }, index) => (
            <div key={id} className="flex mt-10 items-center">
              {/* Rectangle for Step Card */}
              <div
                className={`flex flex-col w-full items-center text-center bg-white rounded-lg p-4 shadow transition-transform duration-300
                  ${
                    index === 1 || index === 3
                      ? "lg:translate-y-20"
                      : "translate-y-0"
                  }`}
              >
                {/* Circle for Icon */}
                <div className="relative bg-gray-300 rounded-full w-40 h-40 flex items-center justify-center mb-4">
                  {icon}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    {`0${id}`}
                  </div>
                </div>
                <p className="font-semibold">{title}</p>
              </div>
              {/* Adjusted Image Height */}
              <img
                src={image}
                alt=""
                className={`h-16 hidden lg:block ${
                  index === 1 ? "lg:mt-32" : "mt-0"
                }`}
              />
            </div>
          ))}
        </div>
        <img
          src="/images/service-shape1-2.png"
          alt="branch"
          className="absolute branch-one top-0 left-0"
        />
      </div>
      <img
        src="/images/process-shape1-2.png"
        alt="trees"
        className="float-right"
      />
    </section>
  );
};

export default StepProcess;
