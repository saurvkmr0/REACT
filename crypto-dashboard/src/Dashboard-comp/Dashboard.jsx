import React from 'react'
import Balance from './Balance'
import CurrentPrice from './CurrentPrice'

const Dashboard = () => {
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
      <Balance/>
      <div className="">
        <CurrentPrice />
      </div>
    </div>
  )
}

export default Dashboard