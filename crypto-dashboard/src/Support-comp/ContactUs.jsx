import React from 'react'
import { IoMail } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className='w-[386px]'>
      <IoMail className='text-purple-900 w-6 h-6'/>
      <div className='text-[32px] font-medium'>Contact Us</div>
      <p className='text-base text-gray-600'>Have a question or just want to know more? Feel free to reach out to us.</p>
    </div>
  )
}

export default ContactUs