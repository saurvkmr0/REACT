import React from 'react'
import ButtonSquare from '../Component/ButtonSquare';
import { LuDownload } from "react-icons/lu";

const Transaction = () => {
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
      <div className="flex justify-end">
        <ButtonSquare name="Export CSV" icon=<LuDownload /> />
      </div>
    </div>
  )
}

export default Transaction;