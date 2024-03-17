import React from 'react'

const Button = ({btnName, onClick, value}) => {
  return (
    <button onClick={onClick} value={value}>{btnName}</button>
  )
}

export default Button;