import React from 'react'
import { Link } from 'react-router-dom'

const SearchResultsPage = ({ vid }) => {
    return (
        <>
            <Link to={"/searchwatch?v="+vid.id.videoId}><div className=' text-white w-[894px] h-[202px] border border-gray-400 p-2 mt-5 rounded-xl'>
                <div className='flex'>
                    <div>
                        <img className='w-[360px] h-[190px] rounded-xl' src={vid.snippet.thumbnails.high.url} alt="thumbnail" />
                    </div>
                    <div className='p-2 pt-4'>
                        <div className='font-bold text-2xl'>{vid.snippet.title}</div>
                        <div className="flex p-2">
                            <div className=''>
                                <img className='w-[40px] h-[40px] rounded-full' src={vid.snippet.thumbnails.high.url} alt="logo" />
                            </div>
                            <div className='text-gray-500 mt-2 ml-2'>{vid.snippet.channelTitle}</div>
                        </div>
                        <div className='text-sm'>{vid.snippet.description}</div>
                    </div>
                </div>
            </div>
            </Link>

        </>
    )
}

export default SearchResultsPage