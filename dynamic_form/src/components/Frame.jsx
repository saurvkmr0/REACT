import React from 'react'
import wallpaper from '../assets/leaf color pattern2.jpg';

const Frame = () => {
  return (
    <div className='Frame flex flex-row bg-red-300 p-16'>
        <div className='bgPart'>
        <img src={wallpaper} />
        </div>
        <div className='formPart bg-white px-20'>
          <h1>Sign up</h1>
          <form className='form grid grid-rows-6 grid-cols-2 '>
          <div className='flex justify-between flex-col'>
            <label>FIRST NAME</label>
            <input/>
          </div>
          <div className='flex justify-between flex-col'>
          <label>LAST NAME</label>
          <input/>
          </div>
          <div className='flex justify-between flex-col'>
            <label>PHONE</label>
            <input/>
          </div>
          <div className='flex justify-between flex-col'>
            <label>EMAIL</label>
            <input/>
          </div>
          <div className='flex justify-between flex-col'>
            <label>PASSWORD</label>
            <input/>
          </div>
          <div className='flex justify-between flex-col'>
            <label>CONFIRM PASSWORD</label>
            <input/>
          </div>
          <div className='flex justify-between flex-col'>
            <label>First Name</label>
            <input/>
          </div>
          </form>
        </div>
    </div>
  );
}

export default Frame