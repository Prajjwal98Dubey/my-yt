import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='sticky top-10  '>
            <div className=' pt-10  text-white w-[100px] h-screen'>
                <Link to='/'><div className='flex flex-col justify-center items-center pt-4 pb-6 cursor-pointer hover:bg-[#3c3f49] rounded-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <div className='ml-1'>Home</div>
                </div></Link>
                <Link to='/shorts'><div className='flex flex-col justify-center items-center pt-4 pb-6 cursor-pointer hover:bg-[#3c3f49] rounded-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-video"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 11 5 3-5 3v-6Z" /></svg>
                    <div className='ml-1'>Shorts</div>
                </div></Link>
                <Link to='/live'><div className='flex flex-col justify-center items-center pt-4 pb-6 cursor-pointer hover:bg-[#3c3f49] rounded-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radio"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>
                    <div className='ml-1'>Live</div>
                </div></Link>
                <Link to='/trending'><div className='flex flex-col justify-center items-center pt-4 pb-6 cursor-pointer hover:bg-[#3c3f49] rounded-2xl '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    <div className='ml-1'>Trending</div>
                </div></Link>
            </div>
        </div>
    )
}

export default SideBar