import React from 'react'
import Card from './Card'

const Content = ({searchData, btnValue}) => {
  return (
    <div className='content'>
      <Card searchData={searchData} btnValue={btnValue}/>
    </div>
  );
}

export default Content;