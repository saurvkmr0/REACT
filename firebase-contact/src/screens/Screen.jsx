import React from 'react'
import Header from '../components/Header';
import NoContactScreen from './NoContactScreen';
import ContactScreen from './ContactScreen';

const Screen = () => {

  const isContactAvailable = true;

  return (
    <div className='w-[393px] h-[652px] bg-gray flex flex-col items-center pt-2'>
        <Header />
        {isContactAvailable?<ContactScreen />:<NoContactScreen />}
        {/* <NoContactScreen /> */}
        {/* <ContactScreen /> */}
    </div>
  )
}

export default Screen