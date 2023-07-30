
import React from 'react'
import NavBar from './NavBar'
import SideVideo from './SideVideo'
import SearchMainVideo from './SearchMainVideo'
import { useSearchParams } from 'react-router-dom'

const SearchWatchPage = () => {
    const[searchParam]=useSearchParams()
  return (
   <>
    <NavBar />
       <div className='flex text-white pl-24 pt-6'>
        <div><SearchMainVideo param={searchParam.get("v")} /></div>
        <div><SideVideo/></div>
       </div>
   </>
  )
}

export default SearchWatchPage