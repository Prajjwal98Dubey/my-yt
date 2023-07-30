import React, { useState ,useEffect} from 'react'
import VIdeoCard from './VIdeoCard'

const VIdeoContainer = () => {
    const[videos,setVideos]=useState([])
     const[isLoading,setIsLoading]=useState(true)
 
     useEffect(()=>{
            const getVideos=async()=>{
                const data=await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=[YOUR_API_KEY]')
                const json=await data.json()
                setVideos(json.items)
                setIsLoading(false)
            }
            getVideos()
     },[])  
 
  return (
   <>  
            <div className=" flex flex-wrap">       
             {videos.map((vid)=> <VIdeoCard key={vid.id} vid={vid}/>)}
             </div>
   </>
  )
}

export default VIdeoContainer
