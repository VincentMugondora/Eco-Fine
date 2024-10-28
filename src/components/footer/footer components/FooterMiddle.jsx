import Icons from "../../miscallaneous/Icons";
import Logo from "/logo2 (1).svg";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import Input from "../../miscallaneous/Input";

const FooterMiddle = () => {
  return (
    <div className="container mx-auto pt-60 px-4 py-10 lg:pt-36">
      <div className="row text-white poppins-light">
        <div className="col-md-3 mb-4">
          <img src={Logo} alt="logo" className="w-28 mb-3 h-auto" />
          <p>
            Protecting biodiversity and natural habitats is crucial for
            maintaining a healthy and sustainable ecology.
          </p>
          <Icons bgColor="#373631" iconColor="white" />
        </div>

        <div className="col-md-3 mb-4">
          <h4 className="mb-3">Pages</h4>
          <ul className="list-unstyled">
            <li>
              <Link className="no-underline text-white hover:text-[#00B150]">
                About Us
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white hover:text-[#00B150]">
                Testimonial
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white hover:text-[#00B150]">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white hover:text-[#00B150]">
                Blog Grid
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h4 className="mb-3">Recent News</h4>
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-red-500 rounded-full overflow-hidden">
              <img
                src="/images/footer/recent-post1-1.jpg"
                alt=""
                className="hover:scale-150"
              />
            </div>
            <div className="cursor-pointer">
              <p className="text-[12px] hover:text-[#00B150] poppins-semibold">
                Go green and reduce <br /> your carbon…
              </p>
              <div className="flex hover:text-[#00B150] poppins-light gap-1 items-center text-[10px]">
                <FaCalendar />
                April 3, 2024
              </div>
            </div>
          </div>
          <div className="flex mt-3 gap-3">
            <div className="w-16 h-16 bg-red-500 rounded-full overflow-hidden">
              <img
                src="/images/footer/recent-post1-2.jpg"
                alt=""
                className="hover:scale-150 md:w-60"
              />
            </div>
            <div className="cursor-pointer">
              <p className="text-[12px] hover:text-[#00B150] poppins-semibold">
                Make a statement <br /> support of the…
              </p>
              <div className="flex hover:text-[#00B150] poppins-light gap-1 items-center text-[10px]">
                <FaCalendar />
                April 3, 2024
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <h4 className="mb-3">NewsLater</h4>
          <p>Your opinion is important to us. So contact us for any service.</p>
          <Input />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FooterMiddle;
