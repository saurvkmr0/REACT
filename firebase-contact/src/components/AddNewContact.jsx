import React, { useState } from 'react'

const AddNewContact = () => {

  return (
    <div className="w-[348px] h-[248px] bg-white absolute top-[164px] px-4 py-5">
        <form className='flex flex-col'>
            <label className='text-base pb-2'>Name</label>
            <input className='h-10 mb-5 pl-[14px] border' name='name' type='text'></input>
            <label className='text-base pb-2'>Email</label>
            <input className='h-10 mb-5 pl-[14px] border' name='name' type='email'></input>
            <div className='flex justify-end'>
            <button className='text-base w-[120px] h-[31px] bg-[#FCCA3F] border' > Add Contact</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewContact