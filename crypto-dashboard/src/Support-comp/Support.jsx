import React from 'react'
import ContactUs from './ContactUs'
import Form from './Form'
import LiveChat from './LiveChat'
import ChatBot from './ChatBot'

const Support = () => {
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
      <div className="flex justify-between gap-6">
        <ContactUs />
        <Form />
      </div>
      <div className="flex justify-between gap-6">
        <LiveChat />
        <ChatBot />
      </div>
    </div>
  )
}

export default Support