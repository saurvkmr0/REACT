import React from 'react'
import { CgMathDivide, CgProfile } from "react-icons/cg";

const Navbar = () => {
    const navname="Dashboard";

  return (
    <div className='flex justify-between grow'>
        <div>{navname}</div>
        <CgProfile />
    </div>
  )
}

export default Navbar