import React from 'react'
import wallpaper from '../assets/purple_leaf2.png';
import Input from './Input';
import CheckBox from './CheckBox';
import Button from './Button';

const Frame = () => {
  return (
    <div className='frame flex flex-row p-16'>
        <div className='bgPart'>
        <img src={wallpaper} />
        </div>

        <div className='formPart bg-white px-20 flex flex-col justify-center'>
          <h1 className='heroText text-4xl pb-5 font-bold'>Sign up</h1>
          <form className='form grid grid-rows-3 grid-cols-2 gap-8'>

          <Input label="FIRST NAME"/>
          <Input label="LAST NAME"/>
          <Input label="PHONE"/>
          <Input label="EMAIL" type="email"/>
          <Input label="PASSWORD" type="password"/>
          <Input label="CONFIRM PASSWORD" type="password"/>  

          <CheckBox label="I accept terms and conditions" type="checkbox"/>
          <CheckBox label="I want to receive news" type="checkbox"/>   

          <Button buttonText="Reset" color="#272155" />
          <Button buttonText="Submit" color="#5f317d"/>

          </form>
        </div>

    </div>
  );
}

export default Frame