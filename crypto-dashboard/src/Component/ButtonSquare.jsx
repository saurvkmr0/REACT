import React from 'react';

const ButtonSquare = ({name,icon}) => {
  return (
    <div>
        <button className='h-[38px] text-sm bg-[#5F00D9] p-[10px] rounded-xl font-medium text-white flex items-center gap-2'>{icon}{name}</button>
    </div>
  )
}

export default ButtonSquare