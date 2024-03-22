import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const SearchBar = () => {
  return (
    <div className="titleBar w-[361px] h-[60px] flex justify-center items-center font-bold text-xl gap-2 bg-red-400 rounded-[10px] ">
        <div className="search flex">
            <IoSearch />
            <input className='bg-white' placeholder='Search Contact'></input>
        </div>
        <IoIosAddCircle className='w-[38px] h-[38px]'/>
    </div>
    )
}

export default SearchBar;