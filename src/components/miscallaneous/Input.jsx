import { useState } from "react";

const Input = () => {
  const [content, setContent] = useState(
    "Your Email Address"
  );

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <div>
      <div
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInput}
        className="bg-transparent py-2 px-2 border border-gray-300 rounded-l-md shadow-md focus:outline-none focus:border-transparent hover:border-transparent transition-all"
      >
        {content}
      </div>
    </div>
  );
};

export default Input;
