import React,{useState} from 'react';
import { IoGrid } from "react-icons/io5";
import { TbArrowsDoubleNeSw, TbDashboard } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
    const [navOption,setNavOption] = useState("dashboard");

    function handleNavClick(navOption)
    {
      navOption === "dashboard" ? setNavOption("dashboard") 
      : navOption === "transaction" ? setNavOption("transaction") 
      : setNavOption("support");
    }
  
  
    return (
      <>
        <aside className='w-[256px] h-screen flex flex-col justify-between px-[28px] py-[54px] cursor-pointer'>
        <header>
          <h1 className='text-3xl font-bold text-[#5F00D9]'>CRYPTOX</h1>
          <div className='list-none py-6 text-bold text-lg'>
          {/* text-[#171717]  text-[#797E82] */}
          <li className={`h-[42px] flex items-center gap-2 ${navOption === "dashboard" ? 'text-[#171717]' : 'text-[#797E82]'}`} onClick={() => handleNavClick("dashboard")}>
              <IoGrid />Dashboard</li>
            <li className={`h-[42px] flex items-center gap-2 ${navOption === "transaction" ? 'text-[#171717]' : 'text-[#797E82]'}`} onClick={() => handleNavClick("transaction")}>
              <TbArrowsDoubleNeSw />Transactions</li>
          </div>
        </header>
        <footer className='list-none'>
            <li className={`h-[42px] flex items-center text-bold text-lg gap-2 ${navOption === "support" ? 'text-[#171717]' : 'text-[#797E82]'}`} onClick={() => handleNavClick("support")}>
              <BiSupport />Support</li>
        </footer>
        </aside>
      </>
    )
}

export default SideNav