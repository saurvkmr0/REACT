import React from 'react'
import ContactUs from './ContactUs'
import Form from './Form'
import LiveChat from './LiveChat'
import ChatBot from './ChatBot'

const Support = () => {
  return (
    <div className=''>
      <div className="flex">
        <ContactUs />
        <Form />
      </div>
      <div className="flex">
        <LiveChat />
        <ChatBot />
      </div>
    </div>
  )
}

export default Support