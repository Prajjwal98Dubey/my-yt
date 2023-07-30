import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import LiveChat from './LiveChat'

const Live = () => {
  return (
    <>
    <NavBar/>
    <div className='fixed'>
        <SideBar/>
    </div>
    <div className='flex text-white ml-[160px]'>
        <div className='mt-10'>
        <iframe width="650" height="400" src="https://www.youtube.com/embed/ndZ7eldH3R8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </div>
        <div className='ml-[10px]'>
            <LiveChat/>
            </div>
    </div>
    </>
  )
}

export default Live