import React from 'react'
import Home from './components/Home';
import './index.css';
import GamePage from './components/GamePage';

const App = () => {
  return (
    <div className='container max-w-full'>
        {/* <Home /> */}
        <GamePage />
    </div>
  );
}

export default App