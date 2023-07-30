import React from 'react'
import NavBar from './NavBar'

const ShortsShimmer = () => {
  return (
    <> 
    <NavBar/>
    <div className='pt-[50px] pl-[450px]'>
          <div className=' mt-[10px] mb-[10px] w-[315px] h-[450px] border border-gray-800 bg-[#2c2d32] rounded-xl animate-pulse'>
          </div>
          <div className=' mt-[10px] mb-[10px] w-[315px] h-[450px] border border-gray-800 bg-[#2c2d32] rounded-xl animate-pulse'>
          </div>
          <div className=' mt-[10px] mb-[10px] w-[315px] h-[450px] border border-gray-800 bg-[#2c2d32] rounded-xl animate-pulse'>
          </div>

    </div>
    </>
  )
}

export default ShortsShimmer