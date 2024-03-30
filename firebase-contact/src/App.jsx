import React from 'react'
import './style.css';
import Container from './components/Container';
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import {db} from './config/firebase';



const App = () => {

  useEffect(()=>
  {
    const getContacts = async () =>
    {
      const contactsRef = collection(db,"contacts");
      const contactsSnapshot = await getDocs(contactsRef);
      console.log(contactsSnapshot);

    }
    getContacts();
  }
,[]);


  return (
    <div className="container max-w-full">
        <Container />
    </div>
  )
}

export default App;