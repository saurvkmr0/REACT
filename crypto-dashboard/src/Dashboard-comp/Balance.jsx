import React from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
import ButtonSquare from '../Component/ButtonSquare';
import { HiDownload,HiUpload } from "react-icons/hi";


const Balance = () => {
  return (
    <div className='flex justify-between max-w-5xl items-center'>
        <div className='h-[88px] flex items-center gap-16'>
            <div className="">
                <div className='flex items-center gap-1 text-gray-500 font-semibold'>
                    <p className='text-sm'>Total Portfolio Value</p>
                    <BsFillInfoCircleFill className='text-base'/>
                </div>
                <h3 className='text-black text-2xl font-medium'>₹ 112,312.24</h3>
            </div>
            <div className="">
                <div className='flex items-center gap-1 text-gray-500 font-semibold'>
                    <p className='text-sm'>Wallet Balances</p>
                </div>
                <h3 className='text-black text-2xl font-medium'>22.39401000 <span className='text-gray-500 font-semibold text-base'>BTC</span></h3>
            </div>
            <div className="">
                <div className='flex items-center gap-1 text-gray-500 font-semibold '>
                    <p className='text-sm'>Total Portfolio Value</p>
                </div>
                <h3 className='text-black text-2xl font-medium'>₹ 1,300.00 <span className='text-gray-500 font-semibold text-base'>INR</span></h3>
            </div>
        </div>


        <div className='flex gap-2'>
            <ButtonSquare name="Deposite" icon=<HiDownload /> />
            <ButtonSquare name="Deposite" icon=<HiUpload /> />
        </div>
    </div>
  )
}

export default Balance