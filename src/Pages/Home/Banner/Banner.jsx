import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

  return (
    <>
      <div className="h-full lg:h-screen w-full bg-[#000000] ">
        <div className="max-w-[1280px] lg:h-full flex flex-col-reverse lg:flex-row lg:flex gap-x-10 items-center lg:justify-between mx-auto my-auto">
          <div className="flex flex-col lg:flex-row items-center gap-x-1">
            <div className="flex lg:flex-col">
              <a target="blank" href="https://github.com/Arif9940">
                <Icon
                  className="text-[#F7E7CF] text-4xl transition-all duration-500 hover:-translate-y-1"
                  icon="mdi:github"
                />
              </a>
              <a target="blank" href="mailto:arifhossen9940@gmail.com">
                <Icon
                  className="text-[#F7E7CF] text-4xl transition-all duration-500 hover:-translate-y-1"
                  icon="mdi:gmail"
                />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/arif-hossen-b930a1144/"
              >
                <Icon
                  className="text-[#F7E7CF] text-4xl transition-all duration-500 hover:-translate-y-1"
                  icon="mdi:linkedin"
                />
              </a>
            </div>

            <div>
              <p className="text-[#F7E7CF] text-sm lg:text-xl mt-2 lg:mt-4">
                Hi, I am
              </p>
              <h1 className="lg:text-7xl my-2 lg:my-4 font-semibold text-[#F7E7CF]">
                ARIF HOSSEN
              </h1>
              <TypeAnimation
                className="text-center mb-4 text-lg lg:text-4xl font-semibold"
                sequence={[
                  "MERN STACK DEVELOPER", // Types 'One'
                  3000, // Waits 1s
                  "Front-End DEVELOPER", // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  "TECH ENTHUSIAST",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{display: "inline-block", color:"#F7E7CF"}}
              />

              <div>
                <button className="text-xl px-3 py-1 mb-6 rounded bg-word text-bg font-medium hover:text-word hover:bg-bg transition-all duration-500">
                  <a
                    href="https://drive.google.com/uc?export=download&id=13FKX-lpZe9B3d2fermwpi74YRjlDbuB0"
                    download
                  >
                    Download My Resume
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-60 mt-20 mb-2 lg:mt-0 lg:w-3/4 flex justify-center bg-bg border border-word p-4 hover:translate-y-6 transition-all duration-500"
              src="https://i.ibb.co/NjZvMFK/rsz-rsz-fcl-64134.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" lg:block">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            fullScreen:{
                enable: true,
                zIndex: 1,
            },
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                // value: "#564E47",
                value: "#93CBA6",
              },
              links: {
                // color: "#ffffff",
                color: "#C6E1C0",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 200,
                },
                value: 10,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
};

export default Banner;


