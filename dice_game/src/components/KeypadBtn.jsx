import React from 'react'

const KeypadBtn = ({btnNum,onClick}) => {
  return (
    <div>
      <button className='text-2xl font-bold w-16 h-16 border border-black' onClick={onClick}>{btnNum}</button>
    </div>
  )
}

export default KeypadBtn;