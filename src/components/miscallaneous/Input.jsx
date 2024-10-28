import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Input = () => {
  const [content, setContent] = useState("");
  const placeholder = "Your Email Address";

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  const handleFocus = (e) => {
    if (e.target.innerText === placeholder) {
      setContent("");
    }
  };

  const handleBlur = (e) => {
    if (e.target.innerText === "") {
      setContent(placeholder);
    }
  };

  useEffect(() => {
    // Set initial content to placeholder
    setContent(placeholder);
  }, []);

  return (
    <div className="flex mt-6">
      <div
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="textbox"
        tabIndex={0}
        className="bg-transparent py-2 px-2 w-full border border-gray-300 rounded-l-md border-r-0 shadow-md focus:outline-none focus:border-blue-500 hover:border-blue-500 transition-all"
      >
        {content}
      </div>
      <div className="py-2 -ml-1 px-4 flex items-center justify-center bg-[#00B150] rounded-r-md cursor-pointer">
        <RiSendPlaneFill className="text-white" />
      </div>
    </div>
  );
};

export default Input;
