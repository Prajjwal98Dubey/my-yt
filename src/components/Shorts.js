import React, { useEffect, useState } from 'react'
import ShortVideos from './ShortVideos'
import NavBar from './NavBar'
import SideBar from './SideBar'
import ShortsShimmer from './ShortsShimmer'

const Shorts = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getItems = async() => {
            const url = 'https://tiktok-video-no-watermark2.p.rapidapi.com/feed/list?region=US&count=50';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': [],
                    'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setItems(result.data)      
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        getItems()
    }, [])
    if(isLoading){
        return <ShortsShimmer/>     
    }
    return (
        <>                  
                  <NavBar/>
                  <div className='fixed'>
                    <SideBar/>
                  </div>
                <div className=' pt-[50px] pl-[450px]'>
                    {items.map((i)=><div key={i.video_id}><ShortVideos i={i}/></div>)}
                </div>
        </>
    )
}
export default Shorts
