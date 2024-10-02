import EcoFriendlyComponent from "./homeComponents/EcoFriendlyComponent";
import HeroSection from "./homeComponents/HeroSection";


const Home = () => {
  return (
    <div>
      <div className="w-screen h-[1px] bg-[#acaaaa]"></div>
     <HeroSection />
     <EcoFriendlyComponent />
    </div>
  );
}

export default Home
