import React from 'react'
import Balance from './Balance'
import CurrentPrice from './CurrentPrice'
import RecentTrans from './RecentTrans'

const Dashboard = () => {
  return (
    <div className='flex flex-col max-w-5xl mx-auto'>
      <Balance/>
      <div className="flex justify-between">
        <CurrentPrice />
        <RecentTrans />
      </div>
    </div>
  )
}

export default Dashboard