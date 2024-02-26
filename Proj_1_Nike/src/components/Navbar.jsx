import React from 'react';
import NavMenu from './NavMenu';
import brandLogo from '../components/assets/brand_logo.png'

function Navbar()
{
    return(
        <div className='navwrap'>
            <img src={brandLogo} alt="logo"></img>
            <NavMenu />
            <button className='loginbtn'>Login</button>
        </div>
    );
}

export default Navbar;