import Image from "../Image/Capture2.png"
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function hero(){
    return<section className='flex flex-col md:flex-row  mobile-navd justify-center top-0'>
    <div className='md:w-1/2 flex flex-col justify-center'>
         <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-white'>Meena</span> Knadasamy
             {/* <p className='text-2xl'>{config.subtitle}</p> */}
         </h1>
         <div className='flex py-5 md:justify-center'>
        <a href="" className="pr-4 text-white hover:text-gray-300"><FaLinkedin size={40}/></a>
        <a href="" className="pr-4 text-white hover:text-gray-300"><SiLeetcode size={40}/></a>
        </div>
        </div>
        <img className="md :hidden w-1/3" src={Image}/>
        
    </section>
}