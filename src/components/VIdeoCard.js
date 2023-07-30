import React from 'react'
import { Link } from 'react-router-dom'
const VIdeoCard = ({ vid }) => {
    const { snippet, statistics } = vid
    const { channelTitle, title, thumbnails } = snippet
    return (
       <Link to={"/watch?v="+vid.id}>
        <div className=' p-2 m-2 w-[360px] shadow-lg font-serif text-white cursor-pointer hover:bg-[#2c303b] rounded-xl flex justify-center pl-5'>
            <div>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="video" />
            <h2 className='font-bold py-2'>{title}</h2>
            <h4>{(channelTitle)}</h4>
            <h5 className='text-sm mt-1'>{(statistics.viewCount.toLocaleString())}</h5>
            </div>
        </div></Link> 
    )
}

export default VIdeoCard