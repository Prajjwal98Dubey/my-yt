import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import SearchResultsPage from './SearchResultsPage'

const SearchResults = () => {
        const[searchparam]=useSearchParams()    
        const[videos,setVideos]=useState([])
        const[isLoading,setIsLoading]=useState(true)  
        const element=searchparam.get("v")

        useEffect(()=>{
               
            const getVideos=async()=>{
                const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${element}&key=AIzaSyBSSoSh0gdKNhlH6UlemOEm8ur5tsMF2Jg`)
                const json=await data.json()
                setVideos(json.items)
                setIsLoading(false)
            }

            getVideos()
             
        },[element])

        if(isLoading){
            return <div>Loading...</div>
        }

  return (
   <>
                 <div className='p-44'>
                    {console.log(element)}
                         {videos.map((vid)=><SearchResultsPage key={vid.etag} vid={vid}/>)}
                 </div>
   </>
  )
}

export default SearchResults