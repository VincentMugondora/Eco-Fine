import EcoFriendlyComponent from "./homeComponents/EcoFriendlyComponent";
import HeroSection from "./homeComponents/HeroSection";
import ServiceSection from "./homeComponents/ServiceSection";
import StepsSection from "./homeComponents/StepsSection";
import Questions from "./homeComponents/Questions";
import Team from "./homeComponents/Team";
import LatestProjects from "./homeComponents/LatestProjects";


const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[1px] bg-[#acaaaa]"></div>
     <HeroSection />
     <EcoFriendlyComponent />
     <ServiceSection />
     <LatestProjects />
     <Team />
     <StepsSection />
     <Questions />
    </div>
  );
}

export default Home
