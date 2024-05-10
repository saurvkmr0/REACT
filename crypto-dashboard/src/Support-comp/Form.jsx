import React from 'react'

const Form = () => {
  return (
    <div className='p-6 min-w-[550px]'>
      <p className='font-medium text-base'>You will receive response within 24 hours of time of submit.</p>
      <div className="my-8">
        <form>
          <div className="flex gap-6 flex-col">
            <div className="flex justify-between gap-6">
              <div className='flex flex-col w-full font-medium text-base'>
                <label>Name</label>
                <input className="p-[10px]" placeholder='e.g. James' />
              </div>
              <div className='flex flex-col w-full'>
                <label>Surname</label>
                <input className="p-[10px]" placeholder='e.g. Arthur' />
              </div>
            </div>

            <div className='flex flex-col w-full font-medium text-base'>
                <label>Email</label>
                <input className="p-[10px]" placeholder='name@email.com'  type='email'/>
            </div>

            <div className='flex flex-col w-full font-medium text-base'>
                <label>Message</label>
                <textarea className="p-[10px] h-[92px]" placeholder='Your Message'  type='text'/>
            </div>

            <div className="flex gap-4">
              <input className='[color:purple]' type='checkbox' />
              <p className="font-medium text-sm">I agree with <a className='text-purple-900'>Terms & Conditions.</a></p>
            </div>
            
            <button className='h-[38px] bg-gray-300 rounded text-gray-600 font-medium text-base hover:bg-purple-900 hover:text-white'>Send a Message</button>
            <button className='h-[38px] font-medium text-base hover:bg-purple-900 hover:text-white'>Book a Meeting</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form