import EcoFriendlyComponent from "./homeComponents/EcoFriendlyComponent";
import HeroSection from "./homeComponents/HeroSection";
import ServiceSection from "./homeComponents/ServiceSection";


const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[1px] bg-[#acaaaa]"></div>
     <HeroSection />
     <EcoFriendlyComponent />
     <ServiceSection />
    </div>
  );
}

export default Home
