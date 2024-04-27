import React,{createContext, useState} from 'react'
import Container from './Component/Container';
import './style.css'
export const ToggleNavContext = createContext();

const App = () => {
  const [activeNav,setActiveNav]=useState("dashboard");

  return (
    <ToggleNavContext.Provider value={[activeNav, setActiveNav]}>
      <Container/>
    </ToggleNavContext.Provider>
  )
}

export default App