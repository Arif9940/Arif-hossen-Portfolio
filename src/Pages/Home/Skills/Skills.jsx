import Title from "../../../Component/Title";
import Marquee from "react-fast-marquee";
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from "@iconify/react";
const Skills = () => {
  return (
    <div id="skill" className="py-40 bg-[#93CBA6] ">
      <Title heading="Skills" />

      <div className="grid grid-cols-1 mt-20 mb-32 lg:grid-cols-5 gap-10 lg:gap-y-10 max-w-[1280px] mx-auto">
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <Icon className="text-6xl" icon="logos:javascript" />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">JAVASCRIPT</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={82} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <Icon className="text-6xl" icon="devicon:react-wordmark" />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">REACT JS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={85} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <Icon className="text-6xl" icon="logos:html-5"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">HTML 5</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={95} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <Icon className="text-6xl"  icon="logos:css-3"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">CSS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={85} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <Icon className="text-6xl"  icon="logos:firebase"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">FIREBASE AUTH</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={85} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <Icon className="text-6xl"  icon="logos:nodejs"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">NODE JS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={65} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <Icon className="text-6xl"  icon="skill-icons:expressjs-dark"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">EXPRESS JS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={72} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <Icon className="text-6xl"  icon="devicon:mongodb-wordmark" />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">MONGODB</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={80} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <Icon className="text-6xl"   icon="logos:jwt-icon" />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">JSON WEB TOKEN</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={80} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <Icon className="text-6xl"   icon="devicon:git" />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">GIT</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={80} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="2000"
        >
          <Icon className="text-6xl"    icon="logos:sass"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">SASS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={75} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="2000"
        >
          <Icon className="text-6xl"    icon="devicon:tailwindcss"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">TAILWIND CSS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={90} />
          </div>
        </div>
        
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="2000"
        >
          <Icon className="text-6xl"     icon="logos:bootstrap"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">BOOTSTRAP CSS</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={85} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="2000"
        >
          <Icon className="text-6xl" icon="simple-icons:daisyui"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">DAISY UI</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={90} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="2000"
        >
          <Icon className="text-6xl" icon="akar-icons:vercel-fill"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">VERCEL</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={78} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="1000"
        >
          <Icon className="text-6xl" icon="devicon:materialui"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">MATERIAL UI</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={70} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="1000"
        >
          <Icon className="text-6xl" icon="simple-icons:chakraui"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">CHAKRA UI</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={70} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="1000"
        >
          <Icon className="text-6xl" icon="logos:visual-studio-code"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">VISUAL STUDIO</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={75} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="1000"
        >
          <Icon className="text-6xl" icon="devicon:figma"  />
          <p className="text-sm text-[#F7E7CF] font-header font-bold">FIGMA</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={85} />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center"
          data-aos="zoom-in" data-aos-duration="1000"
        >
          <Icon className="text-6xl"  icon="skill-icons:photoshop"/>
          <p className="text-sm text-[#F7E7CF] font-header font-bold">PHOTOSHOP</p>
          <div className="w-full">
            <ProgressBar height='16px' bgColor="#50B47C" labelSize="12px" completed={75} />
          </div>
        </div>
        
      </div>

      <div className="w-full">
        <Marquee
          speed={120}
          className="font-semibold"
          style={{
            height: "100px",
            background: "#000000",
            fontSize: "32px",
            color: "#F7E7CF",
          }}
        >
          JAVASCRIPT • REACTJS • HTML • CSS • NODEJS • EXPRESSJS • MONGODB • JWT
          • SCSS • SASS • GIT • FIREBASE AUTH • VERCEL • FIGMA •
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
