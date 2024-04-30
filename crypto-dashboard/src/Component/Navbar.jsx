import React,{useContext} from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { ToggleNavContext } from '../App';

const Navbar = () => {
    const [activeNav, setActiveNav] = useContext(ToggleNavContext);

  return (
    <div className='flex justify-between px-[115px] h-16 items-center'>
        <div className='grow text-3xl font-medium'>{activeNav.charAt(0).toUpperCase()+activeNav.slice(1)}</div>
        <BsPersonCircle className='[font-size:45px] font-thin'/> 
    </div>
  )
}

export default Navbar