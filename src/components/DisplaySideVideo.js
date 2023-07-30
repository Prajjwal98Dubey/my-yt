import React from 'react'
import { Link } from 'react-router-dom'

const DisplaySideVideo = ({vid}) => {
    const { snippet, statistics } = vid
    const { channelTitle, title, thumbnails } = snippet
    return (
        <Link to={"/watch?v="+vid.id}>
        <div className='p-2 m-2  w-[400px] h-[150px] shadow-md shadow-gray-800  text-white cursor-pointer hover:bg-[#2c303b] rounded-xl flex justify-center pl-5'>
            <div className='flex'>
            <div>
            <img className='rounded-lg w-[450px] h-[140px]' src={thumbnails.medium.url} alt="video" />
            </div>
            <div className='ml-2'>
            <div className='text-sm font-semibold'>{title}</div>
            <div className='text-gray-400 text-sm mt-2'>{(channelTitle)}</div>
            <div className='text-gray-400 text-sm mt-2'>{(statistics.viewCount.toLocaleString())} views</div>
            </div>
            </div>
        </div>
        </Link>
    )
}

export default DisplaySideVideo