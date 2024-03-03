import React from 'react'

function Button(props) {
  return (
    <div btn>
        <button className='font-normal' style={{backgroundColor:props.color, padding:"5px 0px", width:"80px", color:"white", borderRadius:"5px"}}>{props.buttonText}</button>
    </div>
  )
}

export default Button;