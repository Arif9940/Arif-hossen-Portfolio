import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Massages from "../Masages/Massages";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="text-2xl">
      <Navbar/>
      <div id="banner">
        <Banner/>
      </div>
      <div id="about" >
        <About/>
      </div>
      <div id="skill" >
        <Skills/>
      </div>
      <div id="project" >
        <Project/>
      </div>
      <div id="massage" >
        <Massages></Massages>
      </div>
      <div id="contact" >
        <Contact/>
      </div>
      
    </div>
  );
};

export default Home;
