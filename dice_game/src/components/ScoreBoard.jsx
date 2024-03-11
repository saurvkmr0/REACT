import React, { useState } from 'react'
import KeypadBtn from './KeypadBtn';

const ScoreBoard = ({ onDataReceived, score }) => {

  const [keyPadValue, setKeyPadValue] = useState("0");
  function handelClick(value)
  {
    setKeyPadValue(value);
    // console.log("keypad: ",value);
    onDataReceived(value);
  }


  return (
    <div className='h-40 flex items-center justify-between text-center '>
        <div className='text-8xl font-medium'>{score}
            <p className='text-2xl' > Total Score</p>
        </div>
        <div className='flex flex-col text-end gap-4 font-bold'>
            <div className='flex gap-6'>
                <KeypadBtn btnNum="1" onClick={()=>{handelClick(1)}} />
                <KeypadBtn btnNum="2" onClick={()=>{handelClick(2)}} />
                <KeypadBtn btnNum="3" onClick={()=>{handelClick(3)}} />
                <KeypadBtn btnNum="4" onClick={()=>{handelClick(4)}} />
                <KeypadBtn btnNum="5" onClick={()=>{handelClick(5)}} />
                <KeypadBtn btnNum="6" onClick={()=>{handelClick(6)}} />
            </div>
            <p className='text-2xl' >Select Number</p>
        </div>
    </div>
  )
}

export default ScoreBoard;