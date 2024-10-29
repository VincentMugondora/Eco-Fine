import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo2.svg";
import Logo2 from "/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#02282B] shadow-lg shadow-gray-50 p-4">
      <div className="container ">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="text-white font-bold text-lg">
            <img src={Logo} alt="logo" className="w-28 h-auto" />
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <IoCloseCircleSharp className="text-2xl" />
              ) : (
                <IoMdMenu className="text-2xl" />
              )}
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex md:space-x-6 items-center text-white">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 no-underline text-white text-xl poppins-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 no-underline text-white text-xl poppins-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-gray-300 no-underline text-white text-xl poppins-semibold"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 no-underline text-white text-xl poppins-semibold"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 no-underline text-white text-xl poppins-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed z-50 top-0 left-0 w-3/4 h-full bg-white p-4 transition-transform duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } shadow-2xl`}
        >
          {/* Close Icon */}
          <li className="p-4">
            <img src={Logo2} alt="logo" className="w-28 h-auto" />
          </li>
          <IoRemoveOutline className="line" />
          <li className="mt-12 mb-3 flex justify-between items-center">
            <Link
              to="/"
              className="text-black no-underline cursor-pointer hover:text-gray-600"
            >
              Home
            </Link>
            <div className="p-2 bg-[#EAF7ED] rounded-full">
              <FaPlus className="text-[gray]" />
            </div>
          </li>
          <IoRemoveOutline className="lines" />
          <li className="mt-6 mb-3 flex items-center justify-between">
            <Link
              to="/about"
              className="text-black no-underline cursor-pointer cursor-pointer hover:text-gray-600"
            >
              About
            </Link>
            <div className="p-2 bg-[#EAF7ED] rounded-full">
              <FaPlus className="text-[gray]" />
            </div>
          </li>
          <IoRemoveOutline className="lines" />
          <li className="mt-6 mb-3 flex items-center justify-between">
            <Link
              to="/blog"
              className="text-black no-underline cursor-pointer hover:text-gray-600"
            >
              Blog
            </Link>
            <div className="p-2 bg-[#EAF7ED] rounded-full">
              <FaPlus className="text-[gray]" />
            </div>
          </li>
          <IoRemoveOutline className="lines" />
          <li className="mt-6 mb-3 items-center flex justify-between">
            <Link
              to="/services"
              className="text-black no-underline cursor-pointer hover:text-gray-600"
            >
              Services
            </Link>
            <div className="p-2 bg-[#EAF7ED] rounded-full">
              <FaPlus className="text-[gray]" />
            </div>
          </li>
          <IoRemoveOutline className="lines w-full" />
          <li className="mt-6 items-center flex justify-between">
            <Link
              to="/contact"
              className="text-black no-underline cursor-pointer hover:text-gray-600"
            >
              Contact
            </Link>
            <div className="p-2 bg-[#EAF7ED] rounded-full">
              <FaPlus className="text-[gray]" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
