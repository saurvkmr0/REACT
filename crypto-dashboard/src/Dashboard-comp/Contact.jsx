import React from 'react'
import contactBg from '../Assets/Visual.png'
import ButtonPill from '../Component/ButtonPill'

const Contact = () => {
  return (
    <div className='p-6 flex flex-col gap-4 w-[468px] bg-[#5F00D9] rounded-[10px] contactBg'>
        <ButtonPill name="Contact" bgColor="bg-white" textColor="text-purple-900"/>
        <p className='font-medium text-lg text-white'>Learn more about our real estate, mortgage, and  corporate account services</p>
    </div>
  )
}

export default Contact