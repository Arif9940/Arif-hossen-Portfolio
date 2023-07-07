import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className=" bg-[#50B47C] border-t-2 border-bg max-w-[1280px] mx-auto rounded">
      <div className="flex justify-between items-center">
        <Link to="banner" spy={true} smooth={true} offset={0} duration={500}>
          <img
            className="w-10 py-5 ml-5 cursor-pointer"
            src="https://i.ibb.co/8Nb6RYd/software-developer.png"
            alt=""
          />
        </Link>

        <p className="text-[#F7E7CF] text-[14px] text-end">Copy Right @2023 Arif Hossen</p>
       
        
        <div className="flex mr-5">
          <a target="blank" href="https://github.com/Arif9940">
            <Icon
              className="text-[#F7E7CF]  text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:github"
            />
          </a>
          <a target="blank" href="mailto:arifhossen9940@gmail.com">
            <Icon
              className="text-[#F7E7CF]  text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:gmail"
            />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/arif-hossen-b930a1144/">
            <Icon
              className="text-[#F7E7CF]  text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
