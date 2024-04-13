import { Formik } from 'formik';
import React, { useState,useEffect } from 'react'

const AddNewContact = () => {
  const[newContactData,setNewContactData]=useState('');

  const contactData = {
    name:'',
    email:''
  }

  useEffect(() => {
    console.log("Updated contact data:", newContactData);
  }, [newContactData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContactData = {
      name: e.target.elements.name.value, 
      email: e.target.elements.email.value
    };
    setNewContactData(updatedContactData);
  }

  return (
    <div className="w-[348px] h-[248px] bg-white absolute top-[164px] px-4 py-5">
      <Formik>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className='text-base pb-2'>Name</label>
            <input className='h-10 mb-5 pl-[14px] border' name='name' type='text'></input>
            <label className='text-base pb-2'>Email</label>
            <input className='h-10 mb-5 pl-[14px] border' name='email' type='email'></input>
            <div className='flex justify-end'>
            <button className='text-base w-[120px] h-[31px] bg-[#FCCA3F] border' type='submit'> Add Contact</button>
            </div>
        </form>
      </Formik>
    </div>
  )
}

export default AddNewContact