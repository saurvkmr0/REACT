import React from 'react'
import ScoreBoard from './ScoreBoard';
import Content from './Content';

const GamePage = () => {
  return (
    <div className='mx-20 my-12'>
      <ScoreBoard score="12" />
      <Content />
    </div>
  )
}

export default GamePage;