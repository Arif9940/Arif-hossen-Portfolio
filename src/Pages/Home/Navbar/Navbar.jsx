import { Link } from "react-scroll";
// import { reveal as Menu } from "react-burger-menu";

import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  console.log(menu);
  return (
    <div className="fixed shadow-md w-full bg-[#50B47C] bg-opacity-30">
      <div className="max-w-[1280px] flex justify-between items-center mx-auto py-2">
        <div onClick={() => setMenu(!menu)} className="lg:hidden ml-2">
          {menu ? (
            <Icon icon="ci:hamburger-lg" />
          ) : (
            <Icon icon="akar-icons:cross" />
          )}
        </div>

        <img
          className="w-10 ml-5 lg:ml-0"
          src="https://i.ibb.co/8Nb6RYd/software-developer.png"
          alt=""
        />

        <div className="flex hidden lg:block mx-auto max-w-[1280px]">
          <ul className="flex font-header font-semibold text-word text-base">
            <Link
              to="banner"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[#F7E7CF] ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-[#F7E7CF] transition-all duration-500 px-3 py-3 rounded-md"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="ml-5 text-[#F7E7CF] cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md"
            >
              About Me
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="ml-5 text-[#F7E7CF] cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="ml-5 text-[#F7E7CF] cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md"
            >
              Projects
            </Link>
            <Link
              to="massage"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="ml-5 text-[#F7E7CF] cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md"
            >
              Send Massage
            </Link>
          </ul>
        </div>

        <button className="text-xl text-[#F7E7CF] px-3 py-1 rounded bg-word text-bg font-medium hover:text-word hover:bg-bg transition-all duration-500">
          <a href="mailto:arifhossen9940@gmail.com">Hire Now</a>
        </button>
      </div>
      <div
        className={
          menu
            ? "bg-word transition-all -translate-x-[1000px] duration-500 w-1/2 "
            : "bg-word transition-all  duration-500 h-screen w-1/3 rounded-md lg:hidden"
        }
      >
        {menu ? (
          <></>
        ) : (
          <div>
            <ul className="font-header font-semibold absolute text-bg text-base">
              <li className=" text-[#F7E7CF] cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                <Link
                  to="banner"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  About Me
                </Link>
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
              <Link
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  Skills
                </Link>
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
              <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  Projects
                </Link>
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
              <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
