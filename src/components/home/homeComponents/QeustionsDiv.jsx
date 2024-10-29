import { useState } from "react";

const ToggleTextDiv = ({ heading, text, isActive, onClick }) => {
  return (
    <div className="mb-4">
      <div
        onClick={onClick}
        className={`cursor-pointer p-4 border-none rounded-lg flex justify-between items-center ${
          isActive
            ? "bg-green-500 text-white rounded-b-none"
            : "bg-white hover:bg-gray-200"
        } transition-colors duration-500`}
      >
        <h4 className="text-lg md:text-xl">{heading}</h4>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full ${
            isActive ? "bg-white text-green-500" : "bg-green-400 text-white"
          } transition-colors duration-500`}
        >
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="p-4 transition-opacity duration-500 bg-white rounded-b-md">
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
};

const Apps = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <ToggleTextDiv
        heading="What is the purpose of your company?"
        text="Ecology is the study of the relationships between living organisms and their environment, including the interactions between different species."
        isActive={activeIndex === 0}
        onClick={() => toggleTextVisibility(0)}
      />
      <ToggleTextDiv
        heading="What makes your company unique?"
        text="Our unique approach combines scientific research with community engagement to promote sustainable practices."
        isActive={activeIndex === 1}
        onClick={() => toggleTextVisibility(1)}
      />
      <ToggleTextDiv
        heading="How much time do I need to volunteer?"
        text="We recommend at least a few hours a month to make a meaningful impact."
        isActive={activeIndex === 2}
        onClick={() => toggleTextVisibility(2)}
      />
    </div>
  );
};

export default Apps;
