// Icons.js
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Icons = ({ bgColor = "#00B150", iconColor = "white" }) => {
  return (
    <div className="flex space-x-2">
      <div className={`p-2 rounded-sm`} style={{ backgroundColor: bgColor }}>
        <LiaFacebookF className="text-white" />
      </div>
      <div className={`p-2 rounded-sm`} style={{ backgroundColor: bgColor }}>
        <FaTwitter className="text-white" />
      </div>
      <div className={`p-2 rounded-sm`} style={{ backgroundColor: bgColor }}>
        <SiBehance className="text-white" />
      </div>
      <div className={`p-2 rounded-sm`} style={{ backgroundColor: bgColor }}>
        <IoLogoYoutube className="text-white" />
      </div>
    </div>
  );
};

export default Icons;
