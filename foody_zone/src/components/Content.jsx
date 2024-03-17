import React from 'react'
import Card from './Card'

const Content = ({searchData}) => {
  return (
    <div className='content'>
      <Card searchData={searchData}/>
    </div>
  );
}

export default Content;