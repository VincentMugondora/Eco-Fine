import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="bg-[#1D1C17] pb-2 mt-96 relative">
      <section className="container-fluid bg-[#24231D]">
        <div className="container flex justify-center py-5 px-3 footer absolute -mt-28">
          <div className="md:flex flex-wrap w-full justify-between">
            <div className="flex gap-4">
              <div className="h-20 w-20 flex items-center justify-center rounded-md bg-white">
                <MdLocationPin className="text-[#00B150] text-3xl" />
              </div>
              <div className="text-white">
                <h5>Location</h5>
                <div className="">
                  <p>258 Daniel Mansion 258</p>
                  <p className="-mt-5">Berlin Germany</p>
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
                  <p className="-mt-5">Weekend 10am -12pm</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-20 w-20 flex items-center justify-center rounded-md bg-white">
                <MdLocationPin className="text-[#00B150] text-3xl" />
              </div>
              <div className="text-white">
                <h5>Contact Us</h5>
                <div className="">
                  <p>ecofineinfo@ecofine.com</p>
                  <p className="-mt-5">(+259)2257 6156</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-52">
            <p>vincent</p>
        </div>
      </section>
      <div className="bg-[#1D1C17] poppins-light text-white container-fluid">
        <p className="text-center">
          © Copyright 2024 Ecofine. All Rights Reserved
        </p>
        <ul className="flex poppins-regular text-white w-full gap-2 -ml-3 md:justify-evenly">
          <li>Privacy</li>
          <li>Terms & Condition </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
