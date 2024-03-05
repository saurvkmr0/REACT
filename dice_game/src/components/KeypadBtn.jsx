import React from 'react'

const KeypadBtn = (props) => {
  return (
    <div>
      <button className='text-2xl font-bold w-16 h-16 border border-black '>{props.btnNum}</button>
    </div>
  )
}

export default KeypadBtn;