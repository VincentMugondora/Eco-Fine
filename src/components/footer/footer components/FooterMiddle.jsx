import Icons from "../../miscallaneous/Icons";
import Logo from "/logo2 (1).svg"

const FooterMiddle = () => {
  return (
    <div className="flex container flex-wrap pt-36">
      <div className="text-white">
        <img src={Logo} alt="logo" className="w-28 h-auto" />
        <p className="md:w-[40%]">
          Protecting biodiversity and natural habitats is crucial for
          maintaining a healthy and sustainable ecology.
        </p>
        <div>
          <Icons bgColor="#373631" iconColor="white" />
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle
