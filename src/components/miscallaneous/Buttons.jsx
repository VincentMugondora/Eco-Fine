import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Buttons = ({
  text = "Click Me",
  bgColor = "#00B150",
  textColor = "white",
}) => {
  return (
    <div>
      <button
        className={`py-2 px-5 rounded-md`} 
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <p>{text}</p>
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Buttons;
