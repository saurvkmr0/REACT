import React,{useContext} from 'react'
import SideNav from './SideNav';
import Navbar from './Navbar';
import Dashboard from '../Dashboard-comp/Dashboard';
import { ToggleNavContext } from '../App';
import Transaction from '../Transc-comp/Transaction';
import Support from '../Support-comp/Support';

const Container = () => {
  const [activeNav, setActiveNav] = useContext(ToggleNavContext);
  return (
    <div className='flex'>
      <div><SideNav/></div>
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