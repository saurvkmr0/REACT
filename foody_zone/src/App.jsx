import React from 'react'
import "./style.css";
import Navbar from "../src/components/Navbar";
import Content from './components/Content';

const App = () => {
  return (
    <div className='container max-w-full h-screen flex flex-col'>
        <Navbar />
        <Content />
    </div>
  )
}

export default App;