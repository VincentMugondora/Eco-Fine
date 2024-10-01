// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <ul
        className={`md:flex md:space-x-4 ${
          isOpen ? "block" : "hidden"
        } mt-2 md:mt-0`}
      >
        <li>
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-white hover:text-gray-200">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-gray-200">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
