import React, { useEffect, useState } from 'react'
import DisplaySideVideo from './DisplaySideVideo'

const SideVideo = () => {
    const[videos,setVideos]=useState([])
    const[isLoading,setIsLoading]=useState(true)

      useEffect(()=>{
        const getVideos=async()=>{
            const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBx3O0o7OWUS816Jov7sS5JAXeX-1x0HhQ")
            const json=await data.json()
            setVideos(json.items)
            setIsLoading(false)
        }
        getVideos()
      },[])
     
  return (
    <>   
                <div>
           {videos.map((vid)=><DisplaySideVideo key={vid.id} vid={vid}/>)}
           </div>
    </>
  )
}

export default SideVideo