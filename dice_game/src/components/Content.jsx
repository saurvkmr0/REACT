import React, { useState } from 'react'
import dice0 from './assets/dice_1.png'
import dice1 from './assets/dice_1.png'
import dice2 from './assets/dice_2.png'
import dice3 from './assets/dice_3.png'
import dice4 from './assets/dice_4.png'
import dice5 from './assets/dice_5.png'
import dice6 from './assets/dice_6.png'
import Button from './Button'
import Rules from './Rules'

const diceArray=[dice0,dice1,dice2,dice3,dice4,dice5,dice6];
var n=0;

const Content = ({ onDataReceived }) => {
    const[diceNum, setDice] = useState(n);
    function changeDice()
    {
        n=Math.floor(Math.random()*6)+1;
        console.log(n);
        setDice(n);
        onDataReceived(n);
    }

    function resetScore()
    {
      console.log("reset");
      onDataReceived(n+10);
    }

    
  return (
    <div className='flex items-center flex-col pt-12 gap-6'>
        <img className='dice' src={diceArray[n]} onClick={changeDice} />
        <p className='font-semibold text-2xl pb-5 '>Click on Dice to roll</p>
        <Button buttonText="Reset Score" onClick={resetScore}/>
        <Button buttonText="Show Rules" />
        <Rules />
    </div>
  )
}

export default Content;