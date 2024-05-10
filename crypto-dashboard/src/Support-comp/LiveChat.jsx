import React from 'react'
import { IoChatbubble } from "react-icons/io5";

const LiveChat = () => {
  return (
    <div className='w-[386px]'>
      <IoChatbubble className='text-purple-900 w-6 h-6'/>
      <div className='text-[32px] font-medium'>Live Chat</div>
      <p className='text-base text-gray-600'>Don’t have time to wait for the answer? Chat with us now.</p>
    </div>
  )
}

export default LiveChat