import FooterMiddle from "./footer components/FooterMiddle";
import FooterTop from "./footer components/FooterTop";


const Footer = () => {
  return (
    <section className="bg-[#1D1C17] pb-2 mt-64 relative">
      <section className="container-fluid bg-[#24231D]">
        <FooterTop />
        <div className="">
          <FooterMiddle />
        </div>
      </section>
      <div className="bg-[#1D1C17] poppins-light w-full container text-white container-fluid lg:flex lg:justify-between lg:items-center">
        <p className="text-center lg:text-left">
          © Copyright 2024 Ecofine. All Rights Reserved
        </p>
        <ul className="flex poppins-regular text-white w-full gap-2 -ml-3 md:justify-evenly lg:justify-normal">
          <li>Privacy</li>
          <li>Terms & Condition </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
