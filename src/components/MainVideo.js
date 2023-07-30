import React, { useEffect, useState } from 'react'
import SharePopUp from './SharePopUp'

const MainVideo = ({param}) => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const[isOpen,setIsOpen]=useState(false)

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBSSoSh0gdKNhlH6UlemOEm8ur5tsMF2Jg")
      const json = await data.json()
      const filterData = await json.items.filter((item) => item.id === param)
      setVideos(filterData)
      setIsLoading(false)
    }
    getVideos()

  }, [param,isOpen])

  const handleShareClick=()=>{
    setIsOpen(true)
    console.log("clicked!!!!")

  }

  if (isLoading) {
    return <div>Loading!!!!</div>
  }

  const conversionLikes = (s) => {
    if (s.length >= 4 && s.length < 5) {
      return s.substring(0, 1) + "." + s.substring(1, 2) + "k"
    }
    else if (s.length >= 5 && s.length < 6) {
      return s.substring(0, 2) + "k"
    }
    else if (s.length >= 6 && s.length < 7) {
      return s.substring(0, 3) + "k"
    }
    else {
      return s
    }

  }

  return (
    <>
      <div className='w-[700px]'>
        <div>
          <iframe width="700" height="360" src={"https://www.youtube.com/embed/" + param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='pt-2 w-[700px] text-white text-xl font-serif font-semibold'>
          {videos[0].snippet.title}
        </div>
        <div className='pt-3 flex justify-between'>
          <div className='flex'>
            <img className='rounded-full w-[40px] h-[40px] font-semibold' src={videos[0].snippet.thumbnails.medium.url} alt="loading" />
            <div className='p-2'>{videos[0].snippet.channelTitle}</div>
          </div>
          <div className='font-semibold'>
            <button className=' mr-2 text-center border border-gray-400 rounded-3xl w-[58px] h-[36px] hover:bg-gray-500'>Join</button>
            <button className=' text-center border border-gray-400 rounded-3xl w-[95px] h-[36px] bg-white text-black hover:bg-gray-300'>Subscribe</button>
          </div>
          <div className='flex'>
            <div className='flex mr-1'>
              <button className='hover:bg-gray-500 rounded-l-3xl w-[100px] h-[36px] border border-gray-500 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                   <div className='ml-[4px] text-md'>{conversionLikes(videos[0].statistics.likeCount)}</div>
              </button>
              <button className=' hover:bg-gray-500 rounded-r-3xl w-[73px] h-[36px] border border-gray-500 flex justify-center items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-down"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" /></svg>
              </button>
            </div>
            <button id="share-btn-id" className=' hover:bg-gray-500 mr-2 rounded-3xl w-[93px] h-[36px] border border-gray-500 flex justify-center items-center' onClick={()=>handleShareClick()} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward"><polyline points="15 17 20 12 15 7" /><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg> Share</button>
            {isOpen && <SharePopUp setIsOpen={setIsOpen} param={param}/>}
            <button className=' hover:bg-gray-500 w-[40px] h-[36px] border border-gray-500 flex justify-center items-center rounded-full' >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainVideo