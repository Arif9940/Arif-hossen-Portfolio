import Title from "../../../Component/Title";

const About = () => {
    return (
        <div id="about" className="py-40 bg-current lg:h-screen bg-bg2">
            <Title key='ok' heading='About Me'/>
            <p className="text-lg p-4 text-[#F7E7CF] max-w-[1280px] mx-10 lg:mx-auto">I am a passionate web programmer who has dedicated myself to the world of web development, constantly seeking opportunities to learn and grow. JavaScript is my primary programming language, and I have honed my skills in its development. My expertise lies in creating captivating frontend UIs using ReactJS, complemented by the powerful React Router for efficient routing. 
            <br />
            <br />
            To ensure a visually appealing and responsive application, I employ CSS framework Tailwind, along with various Tailwind extensions such as Daisy UI and Flowbite. For the backend, I rely on Node.js with Express.js, and I prefer working with MongoDB, a versatile NoSQL database that offers comprehensive developer data management capabilities. 
            <br />
            <br />
            Through my portfolio, I aim to showcase my proficiency in these technologies and my ability to deliver robust and dynamic web applications.</p>
        </div>
    );
};

export default About;