import Image from"../Image/girl1.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export function About(){

    return<section className=" flex flex-col md:flex-row px-4 py-32 mobile-navd justify-center">
        <div className="w-1/3 pr-4 ..." >
        <img src={Image}/>
        </div>
        <div className="flex justify-center w-1/2  ">
        <div className="border-2 border-indigo-600 w-full h-full ... flex flex-col justify-center text-white">
           
           <div className="flex flex-col  items-center ">
                <h1 className="text-2xl  flex flex-col justify-center font-hero-font me">Experince</h1>
                </div>
                <div>
                    <div></div>
                <p className="text-2xl pl-7 ..."> hi </p>
                </div>
                </div>
       
        </div>
    </section>
}