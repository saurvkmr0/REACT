import React,{useContext} from 'react';
import { ToggleTransFilters } from './Transaction';
import { IoSearch } from "react-icons/io5";


const Heading = () => {
 
    const [activeFilter,setActiveFilter] = useContext(ToggleTransFilters);

  return (
    <div>
        <div className="flex justify-between mt-3 py-4">
            <div className="flex list-none text-base font-medium cursor-pointer">
                <li className={`flex gap-3 ${activeFilter==='all' && "border-b-2 border-purple-900"} px-6 pb-4 ${activeFilter==='all'?"text-black":"text-gray-600"}`} onClick={()=>setActiveFilter("all")}>
                    <p>All</p>
                    <p>349</p>
                </li>
                <li className={`flex gap-3 ${activeFilter==='deposit' && "border-b-2 border-purple-900"} px-6 pb-4 ${activeFilter==='deposit'?"text-black":"text-gray-600"}`} onClick={()=>setActiveFilter("deposit")}>
                    <p>Deposit</p>
                    <p>114</p>
                </li>
                <li className={`flex gap-3 ${activeFilter==='withdraw' && "border-b-2 border-purple-900"} px-6 pb-4 ${activeFilter==='withdraw'?"text-black":"text-gray-600"}`} onClick={()=>setActiveFilter("withdraw")}>
                    <p>Withdraw</p>
                    <p>213</p>
                </li>
                <li className={`flex gap-3 ${activeFilter==='trade' && "border-b-2 border-purple-900"} px-6 pb-4 ${activeFilter==='trade'?"text-black":"text-gray-600"}`} onClick={()=>setActiveFilter("trade")}>
                    <p>Trade</p>
                    <p>22</p>
                </li>
            </div>
            <div className='flex gap-2 items-start text-base text-gray-600 font-medium'>
                <IoSearch className='text-2xl'/>
                <input placeholder='Search by ID or destination'/>
            </div>
        </div>
    </div>
  )
}

export default Heading