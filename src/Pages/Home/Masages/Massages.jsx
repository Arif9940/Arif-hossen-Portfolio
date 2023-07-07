import Title from "../../../Component/Title";

const Massages = () => {
    return (
        <form id="massage" action="https://formspree.io/f/xaygyqln"
        method="POST" className="bg-[#000000] flex flex-col   max-w-[1280px] mx-auto">
     <Title heading="Send Me Massage" />
           

           <div className="flex  w-full place-content-around">
           <div className="flex flex-col  gap-3">
           <p className="text-[#F7E7CF]">Your Name</p>
           <input type="name" name="name" placeholder="Type here your name" className="input input-bordered w-full " />
           </div>
             <div className="flex flex-col gap-3 ">
             <p className="text-[#F7E7CF]">Your Email</p>
           <input type="email" name="email" placeholder="Type here your email" className="input input-bordered w-full " />
             </div>
           </div>
           

           

             <div className="flex flex-col gap-3 p-3 justify-items-center">
               <p className="p-3 text-[#F7E7CF] ">Please Write Massage</p>
                   <textarea type="text" name="text" placeholder="Please Write Massage" className="textarea textarea-bordered textarea-lg w-full justify-items-center" ></textarea>
             </div>
             <div className="text-center">
             <button className="text-xl px-3 py-3 mb-3 text-center rounded bg-word text-bg font-medium hover:text-word hover:bg-bg transition-all duration-500">Send Massage</button>
             </div>

        </form>
    );
};

export default Massages;