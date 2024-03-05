import React from 'react'

const Button = ({...rest}) => {
  return (
    <div className='font-semibold text-base'>
        <button className='w-56 h-11 bg-black text-white rounded-md'>{rest.buttonText}</button>
    </div>
  )
}

export default Button