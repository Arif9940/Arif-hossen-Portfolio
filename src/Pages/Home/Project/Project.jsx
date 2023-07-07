import ProjectCom from "../../../Component/ProjectCom";
import Title from "../../../Component/Title";
import "./Project.css"

const Project = () => {
  return (
    <div className="py-40 bg-[#000000] ">
      <Title heading="Projects" />
      <div className="grid mt-20 grid-cols-1 mx-2 gap-y-4 lg:mx-auto max-w-[1280px] lg:grid-cols-3">
        
        <ProjectCom imgLink='https://i.ibb.co/4MNDz5G/dance-studio-79719-web-app.png' name="DANCE STUDIO" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://dance-studio-79719.web.app/' client='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Arif9940' server='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Arif9940' />


        <ProjectCom imgLink='https://i.ibb.co/1m4sxhX/login-system-with-8a70e-web-app.png' name="KITS TOYS" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://login-system-with-8a70e.web.app/' client='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Arif9940' server='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Arif9940' />


        <ProjectCom imgLink='https://i.ibb.co/myWf4gW/screencapture-chef-squad-web-app-2023-07-03-02-49-59.png' name="CHEF SQUAD" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://chef-squad.web.app/' client='' server='' />
      </div>
    </div>
  );
};

export default Project;
