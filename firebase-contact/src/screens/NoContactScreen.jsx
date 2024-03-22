import React from 'react'
import TitleBar from '../components/TitleBar'
import SearchBar from '../components/SearchBar'

const NoContactScreen = () => {
  return (
    <div className="noContactScreen w-[393px] h-[652px] bg-gray flex flex-col items-center pt-2 ">
      <TitleBar />
      <SearchBar />
    </div>
  )
}

export default NoContactScreen