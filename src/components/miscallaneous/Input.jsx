import React, { useState } from "react";

const EditableDiv = () => {
  const [content, setContent] = useState(
    "This is an editable div. Click here to edit."
  );

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <div
      contentEditable
      suppressContentEditableWarning={true} // Prevents React warnings about contentEditable
      onInput={handleInput}
      className="p-4 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-transparent hover:border-transparent transition-all"
    >
      {content}
    </div>
  );
};

export default EditableDiv;
