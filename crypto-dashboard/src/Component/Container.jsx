import React from 'react'
import SideNav from './SideNav';
import Navbar from './Navbar';

const Container = () => {
  return (
    <div className='flex'>
      <div><SideNav/></div>
      <div>
        <Navbar/>
      </div>
    </div>
  )
}

export default Container