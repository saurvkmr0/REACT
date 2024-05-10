import React from 'react'
import ButtonPill from '../Component/ButtonPill'

const ChatBot = () => {
  return (
    <div className='p-6 flex flex-col gap-4 bg-[#5F00D9] rounded-[10px] h-[130px] contactBg min-w-[550px]'>
        <ButtonPill name="Chatbot" bgColor="bg-white" textColor="text-purple-900"/>
        <p className='font-medium text-lg text-white w-[420px]'>Chat with us now</p>
    </div>
  )
}

export default ChatBot