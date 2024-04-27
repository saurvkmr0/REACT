import React,{useContext} from 'react'
import { CgMathDivide, CgProfile } from "react-icons/cg";
import { ToggleNavContext } from '../App';

const Navbar = () => {
    const [activeNav, setActiveNav] = useContext(ToggleNavContext);

  return (
    <div className='flex justify-between px-[115px] h-16 items-center'>
        <div className='grow text-3xl font-medium'>{activeNav.charAt(0).toUpperCase()+activeNav.slice(1)}</div>
        <CgProfile className='[font-size:50px] font-light'/> 
    </div>
  )
}

export default Navbar