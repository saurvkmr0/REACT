import React from 'react'
import KeypadBtn from './KeypadBtn';

const ScoreBoard = (props) => {
  return (
    <div className='h-40 flex items-center justify-between text-center '>
        <div className='text-8xl font-medium'>{props.score}
            <p className='text-2xl' > Total Score</p>
        </div>
        <div className='flex flex-col text-end gap-4 font-bold'>
            <div className='flex gap-6'>
                <KeypadBtn btnNum="1" />
                <KeypadBtn btnNum="2" />
                <KeypadBtn btnNum="3" />
                <KeypadBtn btnNum="4" />
                <KeypadBtn btnNum="5" />
                <KeypadBtn btnNum="6" />
            </div>
            <p className='text-2xl' >Select Number</p>
        </div>
    </div>
  )
}

export default ScoreBoard;