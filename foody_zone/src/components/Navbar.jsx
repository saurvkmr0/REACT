import React from 'react';
import logoImg from './assets/Foody Zone.svg'
import Search from './Search';
import NavBtn from './NavBtn';

const Navbar = ({ onDataReceived }) => {

  return (
    <div className='navbar'>
        <div className='logo'><img src={logoImg} /></div>
        <NavBtn />
        <Search onDataReceived={onDataReceived}/>
    </div>
  )
}

export default Navbar;