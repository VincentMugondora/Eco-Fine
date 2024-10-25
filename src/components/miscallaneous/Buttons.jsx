// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'

const Buttons = ({
  text = "Click Me",
  bgColor = "#00B150",
  textColor = "white",
  to = '#'
}) => {
  return (
    <div>
      <Link
        to={to}
        className={`btns inline-flex items-center gap-1 px-6 py-3 rounded-lg no-underline poppins-semibold
            hover:text-black`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <p className="items-center gap-2 flex">
          {text}
          {/* <MdKeyboardDoubleArrowRight /> */}
        </p>
      </Link>
    </div>
  );
};

export default Buttons;
