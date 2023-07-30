
import React from 'react'
import MainVideo from './MainVideo'
import SideVideo from './SideVideo'
import { useSearchParams } from 'react-router-dom'
import NavBar from './NavBar'

const WatchPage = () => {
    const [searchParam]=useSearchParams()
   
  return (
    <>
    <NavBar/>
       <div className='flex text-white pl-24 pt-6'>
        <div><MainVideo param={searchParam.get("v")} /></div>
        <div><SideVideo/></div>
       </div>
    </>
  )
}

export default WatchPage