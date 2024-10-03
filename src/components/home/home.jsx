import EcoFriendlyComponent from "./homeComponents/EcoFriendlyComponent";
import HeroSection from "./homeComponents/HeroSection";
import ServiceSection from "./homeComponents/ServiceSection";
import StepsSection from "./homeComponents/StepsSection";


const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[1px] bg-[#acaaaa]"></div>
     <HeroSection />
     <EcoFriendlyComponent />
     <ServiceSection />
     <StepsSection />
    </div>
  );
}

export default Home
