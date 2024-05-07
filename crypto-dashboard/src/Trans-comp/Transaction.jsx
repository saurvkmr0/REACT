import React,{createContext,useState} from 'react'
import ButtonSquare from '../Component/ButtonSquare';
import { LuDownload } from "react-icons/lu";
import Heading from './Heading';
import TransTable from './TransTable';
export const ToggleTransFilters = createContext();


const Transaction = () => {

  const [activeFilter, setActiveFilter]=useState("all");
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
        <div className="flex justify-end">
          <ButtonSquare name="Export CSV" icon=<LuDownload /> />
        </div>
          <ToggleTransFilters.Provider value={[activeFilter,setActiveFilter]}>
            <Heading />
            <TransTable />
          </ToggleTransFilters.Provider>
    </div>
  )
}

export default Transaction;