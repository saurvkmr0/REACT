import React,{useContext, useState} from 'react'
import SideNav from './SideNav';
import Navbar from './Navbar';
import Dashboard from '../Dashboard-comp/Dashboard';
import { ToggleNavContext } from '../App';
import Transaction from '../Transc-comp/Transaction';
import Support from '../Support-comp/Support';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Container = () => {
  const [activeNav, setActiveNav] = useContext(ToggleNavContext);
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  
  const toggleSideNavIcon=()=>{
    setSideNavIsOpen(!sideNavIsOpen);
  }

  const toggleSideNav=()=>{
    const sideNav = document.getElementById('sidenav');
    sideNav.style.display==="block"?sideNav.style.display="none":sideNav.style.display="block";
    toggleSideNavIcon();
  }
  return (
    <div className='flex'>
      <div id='sidenav' className='hidden lg:block'><SideNav/></div>
      <div className='block lg:hidden p-8 font-bold text-2xl' onClick={toggleSideNav}>{!sideNavIsOpen?<GiHamburgerMenu />:<IoMdArrowRoundBack />}</div>
      <div className='grow'>
        <Navbar/>
        {activeNav==="dashboard"?
        <Dashboard/>:
        (activeNav==="transaction"?
        <Transaction/>:
        <Support/>)
        }
      </div>
    </div>
  )
}

export default Container