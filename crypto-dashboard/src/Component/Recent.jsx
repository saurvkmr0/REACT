import React from 'react';

const Recent = ({icon,title,timestamp,amount1,amount2}) => {
  return (
    <div className='w-[468px] pb-8 px-6'>
        <div className="">
            <div className="flex">
                <div className='text-base p-3'>{icon}</div>
                <div className="flex justify-between w-full">
                    <div className="">
                        <p className='text-base font-bold mb-1'>{title}</p>
                        <p className='text-[#797E82] text-sm font-medium'>{timestamp}</p>
                    </div>
                    <div className='text-base font-bold text-end'>
                        <p>{amount1}</p>
                        <p className='text-[#797E82] text-sm font-medium'>{amount2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recent