import React from 'react';
import NavMenu from './NavMenu';

function Navbar()
{
    return(
        <div className='navwrap'>
            <img src='../components/assets/brand_logo.png' alt="logo"></img>
            <NavMenu />
            <button className='loginbtn'>Login</button>
        </div>
    );
}

export default Navbar;