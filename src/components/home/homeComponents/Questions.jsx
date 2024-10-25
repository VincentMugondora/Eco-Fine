// import "./HomeComponents.css";
import Image from "/images/2-1.jpg";
import Image2 from "/images/2-3.jpg";
import Image3 from "/images/2-2.jpg";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Team = () => {
  const teams = [
    { image: Image, name: "Daniel Pasha", position: "CEO" },
    { image: Image2, name: "Vincent Mugondora", position: "FOUNDER" },
    { image: Image3, name: "Wade Warren", position: "MANAGER" },
  ];

  return (
    <div className="w-full py-10 mt-80 h-auto team">
      <section className="container">
        <p className="text-2xl text-[#00B150] text-center font-bold">Best Team</p>
        <div className="mx-auto flex flex-col justify-between text-center">
          <p className="text-3xl text-white font-bold">
            Waste is avoided through conservation
          </p>
          <div className="flex justify-center">
            {" "}
            <button className="bg-[#00B150] text-white poppins-regular rounded-md h-11 px-11">
              Explore Team
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            {teams.map((team, index) => (
              <div
                key={index}
                className="grid mt-48 border border-3 border-[#2e2e2e] rounded-md bg-[#24231D] p-5"
              >
                <div className="">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full -mt-44 h-auto rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                </div>
                <div className="mt-4 flex flex-col w-full justify-center items-center">
                  <h2 className="text-2xl poppins-semibold text-white">
                    {team.name}
                  </h2>
                  <p className="text-[grey] font-bold">{team.position}</p>
                  <div className="flex justify-evenly w-full">
                    <div className="p-2 bg-[#00B150] rounded-sm">
                      <LiaFacebookF className="text-white" />
                    </div>
                    <div className="p-2 bg-[#00B150] rounded-sm">
                      <FaTwitter className="text-white"/>
                    </div>
                    <div className="p-2 bg-[#00B150] rounded-sm">
                      <SiBehance className="text-white"/>
                    </div>
                    <div className="p-2 bg-[#00B150] rounded-sm">
                      <IoLogoYoutube className="text-white"/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
