import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Input = () => {
  const [content, setContent] = useState("Your Email Address");

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <div className="flex mt-6">
      <div
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInput}
        className="bg-transparent py-2 px-2 border border-gray-300 rounded-l-md shadow-md focus:outline-none focus:border-transparent hover:border-transparent transition-all"
      >
        {content}
      </div>
      <div className="py-2 px-4 flex items-center justify-center bg-[#00B150] rounded-r-md">
        <RiSendPlaneFill className="text-white" />
      </div>
    </div>
  );
};

export default Input;
