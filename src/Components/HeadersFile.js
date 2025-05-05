import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
export function Header(){
    const [toggle,settoggle]=useState(false)
 
    return<header className="flex justify-between px-5 py-2 bg-black">
        <a href="#"className="font-bold text-white" >data </a>
        <nav className="hidden md:block text-white">
        <ul className="flex text-red">
            <li><a href="#">home </a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Project </a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        
        </nav>
       {toggle&& <nav className="block md:hidden mobile-navd">
        <ul className="flex flex-col text-white">
            <li><a href="#">home </a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Project </a></li>
            <li><a href="#">Contact</a></li>
        </ul>
     
        </nav>}
        <button className='block md:hidden' onClick={()=>settoggle(!toggle)}>
  <MenuIcon className=' text-white'/>
</button>
    </header>
}
