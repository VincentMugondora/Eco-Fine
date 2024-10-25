import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";

const FooterTop = () => {
  return (
    <div>
      <div className="footer md:w-[90%] absolute left-1/2 transform -translate-x-1/2 py-5 px-3 -mt-24">
        <div className="md:flex flex-wrap w-full justify-between">
          <div className="flex gap-4">
            <div className="h-20 w-20 flex items-center justify-center rounded-md bg-white">
              <MdLocationPin className="text-[#00B150] text-3xl" />
            </div>
            <div className="text-white">
              <h5>Location</h5>
              <div className="">
                <p>258 Daniel Mansion 258</p>
                <p className="">Berlin Germany</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 flex items-center justify-center rounded-md bg-white">
              <LuClock4 className="text-[#00B150] text-3xl" />
            </div>
            <div className="text-white">
              <h5>Working Hours</h5>
              <div className="">
                <p>Weekdays 8am-22pm</p>
                <p className="">Weekend 10am -12pm</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 flex items-center justify-center rounded-md bg-white">
              <IoIosMail className="text-[#00B150] text-3xl" />
            </div>
            <div className="text-white">
              <h5>Contact Us</h5>
              <div className="">
                <p>ecofineinfo@ecofine.com</p>
                <p className="">(+259)2257 6156</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
