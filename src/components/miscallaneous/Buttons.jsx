import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
import { MdOutlineDoubleArrow } from "react-icons/md";

const Buttons = ({
  to = "/",
  text = "Discover More",
  bgColor = "#00B150",
  textColor = "white",
}) => {
  return (
    <Link
      to={to}
      className={`bg-green-500 btns inline-flex cursor-pointer items-center gap-1 text-${textColor} px-6 py-3 rounded-lg no-underline poppins-semibold hover:text-black`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
      <MdOutlineDoubleArrow className="arrows" />
    </Link>
  );
};

export default Buttons;
