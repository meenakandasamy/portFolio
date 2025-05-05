import coffee from "../Image/coffee.jpeg"
export  default function Project (){
    return<section className=" flex flex-col px-5 py-10 al justify-center mobile-navd  text-white">
        <div className="w-1/2">  
         <div >
            <h1 className="text-3xl  px-10 mb-5 tex-white font-hero-font">Projects</h1> 
          
            </div>
            <p className="text-1xl  px-10 w-full mb-5 tex-white font-hero-font">Project xcvbnm fghnjm fghj fghj ghjdfghjk fghjkl</p> 
            </div>

        <div className="w-1/2 ">
        <div className="flex  flex-col md:flex-row px-10 gap-5">
            <div  className="relative">
        <img className="h-[350px] w-[500px] border-8 border-white"src={coffee}/>
        <div className="absolute left-10 right-10 top-10 bottom-12 p-8 border-4 border-indigo-500 opacity-0 duration-500 hover:opacity-100">
  <p className="text-center px-5 py-5">sdfghjkl</p>
</div>

        </div>
        <div>
        <img className="h-[250px]"src={coffee}/>
        </div>
       
            </div> </div>
    </section>
}