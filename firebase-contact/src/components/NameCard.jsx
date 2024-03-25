import React from 'react'
import Trash from '../assets/trash.png'
import Edit from '../assets/edit.png'
import ProfileImg from '../assets/profile.png' 

const NameCard = ({contactName, ContactMail}) => {

  return (
    <div className="w-[360px] h-16 bg-cream mb-[11px] rounded-[10px] flex items-center justify-between py-2 px-1">
        <div className='flex'>
            <div className="contactLogo">
                <img src={ProfileImg} />
            </div>
            <div className="contactDetails pl-[6px]">
                <h1 className='text-base font-semibold'>{contactName}</h1>
                <p className='text-xs font-normal'>{ContactMail}</p>
            </div>
        </div>
        <div className="options flex">
            <div className="edit">
                <img src={Edit} />
            </div>
            <div className="delete">
                <img src={Trash} />
            </div>
        </div>
    </div>
  )
}

export default NameCard