import React from 'react'
import SideNav from './SideNav';
import Navbar from './Navbar';

const Container = () => {
  return (
    <div className='flex'>
      <div><SideNav/></div>
      <div className='grow'>
        <Navbar/>
      </div>
    </div>
  )
}

export default Container