import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import ButtonSquare from '../Component/ButtonSquare';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import Graph from '../Assets/Graph.png';

const CurrentPrice = () => {

    const dateStamp=["1H","1D","1W","1M"];
    const timeStamp=["7:15 PM","12:35 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  return (
    <div className='max-w-[468px] max-h-[345px] p-6'>

        <div className="flex justify-between">
            <div>
                <div className='text-gray-500 font-semibold'>
                    <p className='text-sm'>Current Price</p>
                </div>
                <div className="flex items-end gap-2">
                    <h3 className='text-black text-2xl font-medium'>₹26,670.25</h3> <span className='text-[#059669] font-semibold text-base flex items-center'><FiArrowUpRight />0.04%</span>
                </div>
            </div>
                <div className='flex gap-2'>
                    <ButtonSquare name="Buy" icon=<AiFillPlusCircle className='[#5F00D9] text-xl'/> ></ButtonSquare>
                    <ButtonSquare name="Sell" icon=<AiFillMinusCircle className='[#5F00D9] text-xl'/> ></ButtonSquare>
                </div>
        </div>

        <div className='flex justify-end gap-1 text-gray-500 text-xs mt-4 mb-[50px]'>
            {dateStamp.map((item)=>(<p key={item}>{item}</p>))}
        </div>

        <div>
            <img className="" src={Graph} />
        </div>

        <div className="flex justify-between text-gray-500 text-xs mt-4">
            {timeStamp.map((item)=>(<p key={item}>{item}</p>))}
        </div>


    </div>
  )
}

export default CurrentPrice