import React from 'react'
import './style.css';
import Container from './components/Container';
import AddNewContact from './components/AddNewContact';


const App = () => {
  return (
    <div className="container max-w-full">
        <Container />
        <AddNewContact/>
    </div>
  )
}

export default App;