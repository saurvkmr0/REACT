import React from 'react'
import heroImage from "./assets/dice hero.png"
import Button from './Button';

const Home = () => {
  return (
    <div className='home flex flex-row justify-center items-center h-screen'>
        <div className='heroImg'>
            <img src={heroImage} />
        </div>
        <div className='heroText flex flex-col'>
            <h1 className='font-bold text-8xl pb-8'>DICE GAME</h1>
            <div className='ml-auto'>
            <Button buttonText="Play Now" />
            </div>
        </div>
    </div>
  )
}

export default Home;