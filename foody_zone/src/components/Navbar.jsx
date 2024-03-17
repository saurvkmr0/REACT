import React from 'react';
import logoImg from './assets/Foody Zone.svg'
import Search from './Search';
import NavBtn from './NavBtn';

const Navbar = ({ onDataReceived, onBtnChange }) => {

  return (
    <div className='navbar'>
        <div className='logo'><img src={logoImg} /></div>
        <NavBtn onBtnChange={onBtnChange}/>
        <Search onDataReceived={onDataReceived}/>
    </div>
  )
}

export default Navbar;