import React from 'react'

const Container = () => {
  return (
    <>
      <aside className='w-[256px] h-screen flex flex-col justify-between px-[28px] py-[54px]'>
      <header>
        <h1>CRYPTOX</h1>
        <div className='list-none py-6'>
          <li className='h-[42px] flex items-center'>Dashboard</li>
          <li className='h-[42px] flex items-center'>Transactions</li>
        </div>
      </header>
      <footer className='list-none'>
          <li className='h-[42px] flex items-center'>Support</li>
      </footer>
      </aside>
    </>
  )
}

export default Container