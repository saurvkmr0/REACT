import React,{createContext,useState} from 'react'
import ButtonSquare from '../Component/ButtonSquare';
import { LuDownload } from "react-icons/lu";
import Heading from './Heading';
import TransTable from './TransTable';
export const ToggleTransFilters = createContext();
export const SearchFilters = createContext();


const Transaction = () => {

  const [activeFilter, setActiveFilter]=useState("all");
  const [searchValue, setSearchValue]=useState("");
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
        <div className="flex justify-end">
          <ButtonSquare name="Export CSV" icon=<LuDownload /> />
        </div>
          <SearchFilters.Provider value={[searchValue, setSearchValue]}>
          <ToggleTransFilters.Provider value={[activeFilter,setActiveFilter]}>
            <Heading />
            <TransTable />
          </ToggleTransFilters.Provider>
          </SearchFilters.Provider>
    </div>
  )
}

export default Transaction;