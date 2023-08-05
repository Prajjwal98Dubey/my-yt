// Trending Page

import React, { useEffect } from 'react'
import { useState } from 'react'
import TrendingPage from './TrendingPage'
import NavBar from './NavBar'
import SideBar from './SideBar'


const Music = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const[selected,setSelected]=useState('default')
  useEffect(() => {
    const getVideos = async () => {
      const url = `https://youtube-trending.p.rapidapi.com/trending?country=IN&type=${selected}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f13af8c2ecmsh759114cbe180688p1752f1jsn0478d489624a',
          'X-RapidAPI-Host': 'youtube-trending.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setVideos(result)
        setIsLoading(false)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    // getVideos()
  },[selected])
  return (
    <> 
    <NavBar/>
    <div className='fixed'>
     <SideBar/>
     </div>
      <div className='ml-[160px] mt-[50px] text-white font-serif'>
        <div className='flex justify-left mt-10'>
          <img src="https://www.youtube.com/img/trending/avatar/trending.png" alt="trending" className='w-[80px] rounded-full' />
          <div className='text-2xl ml-5 mt-5'>Trending</div>
        </div>
        <div className='mt-4 flex justify-between w-[450px] '>
          <div onClick={()=>setSelected("default")} className='w-[100px] text-center cursor-pointer hover:border-b-4'>Now</div>
          <div  onClick={()=>setSelected("gaming")} className='w-[100px] text-center cursor-pointer hover:border-b-4'>Gaming</div>
          <div  onClick={()=>setSelected("music")} className='w-[100px] text-center cursor-pointer hover:border-b-4'>Music</div>
          <div onClick={()=>setSelected("movies")} className='w-[100px] text-center cursor-pointer hover:border-b-4'>Films</div>
        </div>
        <div className=''>
                 {
                   isLoading ? <div className='text-white'> loading </div> :
                   <div className='mt-10'>{videos.map((v)=><TrendingPage key={v.videoId} vid={v}/>)}</div>
                 }
        </div>
      </div>
    </>
  )
}

export default Music