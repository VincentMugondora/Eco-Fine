import { useState } from "react";
import Img from "/images/1-1.jpg";
import Img2 from "/images/1-2.jpg";
import Img3 from "/images/1-3.jpg";
import Img4 from "/images/2-1.jpg";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const images = [Img, Img2, Img3, Img4];

  const renderImages = () => {
    switch (activeTab) {
      case 1:
        return images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="m-2 w-40 h-40 sm:w-52 sm:h-72 object-cover rounded-lg"
          />
        ));
      case 2:
        return images
          .slice(0, 2)
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="m-2 w-40 h-40 sm:w-52 sm:h-72 object-cover rounded-lg"
            />
          ));
      case 3:
        return images
          .slice(0, 3)
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="m-2 w-40 h-40 sm:w-52 sm:h-72 object-cover rounded-lg"
            />
          ));
      case 4:
        return (
          <img
            src={images[0]}
            alt="Image 1"
            className="m-2 w-40 h-40 sm:w-52 sm:h-72 object-cover rounded-lg"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row py-32">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="flex flex-col">
          {Array.from({ length: 4 }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setActiveTab(index + 1)}
              className={`px-4 py-2 m-2 rounded-full w-full ${
                activeTab === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-[#ECF7ED] text-black"
              }`}
            >
              {index === 0
                ? "All Projects"
                : index === 1
                ? "Climate"
                : index === 2
                ? "Ecosystem"
                : "Recycling"}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:w-3/4">
        {renderImages()}
      </div>
    </div>
  );
};

export default App;
