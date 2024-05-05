import React from 'react';

const ButtonPill = ({name,bgColor,textColor}) => {
  return (
    <div>
        <button className={`text-xs ${bgColor} ${textColor} px-[6px] py-1 rounded-[100px] font-medium flex items-center gap-2`}>{name}</button>
    </div>
  )
}

export default ButtonPill;