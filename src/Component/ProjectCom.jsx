const ProjectCom = ({imgLink, name, madeWith, live, client, server}) => {
  return (
    <div>
      <div className="text-[#50B47C] border rounded grid items-center justify-center py-2 border-bg w-full lg:w-[400px]">
        <div className="img-container w-full mx-auto lg:w-[300px]">
          <img
            className="w-full"
            src={imgLink}
            alt=""
          />
        </div>
        <h3 className="text-3xl py-4 font-bold mx-2">{name}</h3>
        <p className="text-sm pb-4 mx-2">
          Made with {madeWith}
        </p>
        <div className="flex justify-between text-sm mx-2">
          <button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
           <a target='blank' href={live}>Live Site</a>
          </button>
          <button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
            <a target='blank' href={client}>Client Side</a>
          </button>
          <button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
            <a target='blank' href={server}>Server Side</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCom;
