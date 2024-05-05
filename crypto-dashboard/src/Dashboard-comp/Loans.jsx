import React from 'react'
import ButtonPill from '../Component/ButtonPill'

const Loans = () => {
  return (
    <div className='p-6 flex flex-col gap-4 w-[468px]'>
        <ButtonPill name="Loans" bgColor="bg-purple-900" textColor="text-white"/>
        <p className='font-medium text-lg'>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
    </div>
  )
}

export default Loans