import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';
import Content from './Content';

const GamePage = () => {

  const [newScore, setNewScore] = useState("0");
  function handelScoreData(data)
  {
    setNewScore(data);
  }
  
  return (
    <div className='mx-20 my-12'>
      <ScoreBoard score={newScore}/>
      <Content onDataReceived={handelScoreData}/>
    </div>
  )
}

export default GamePage;