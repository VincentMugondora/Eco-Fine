import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Icons = () => {
  return (
    <div>
      <div className="p-2 bg-[#00B150] rounded-sm">
        <LiaFacebookF className="text-white" />
      </div>
      <div className="p-2 bg-[#00B150] rounded-sm">
        <FaTwitter className="text-white" />
      </div>
      <div className="p-2 bg-[#00B150] rounded-sm">
        <SiBehance className="text-white" />
      </div>
      <div className="p-2 bg-[#00B150] rounded-sm">
        <IoLogoYoutube className="text-white" />
      </div>
    </div>
  );
};

export default Icons;
