import React from 'react'
import { Link } from 'react-router-dom'

const TrendingPage = ({vid}) => {
    const trimDescription=(desc)=>{
        if (desc.length <= 134){
            return desc
        }
        else{
            return desc.substring(0,135) + "..."
        }
    }
    const conversionCount = (s) => {
        if (s.length >= 4 && s.length < 5) {
          return s.substring(0, 1) + "." + s.substring(1, 2) + "k"
        }
        else if (s.length >= 5 && s.length < 6) {
          return s.substring(0, 2) + "k"
        }
        else if (s.length >= 6 && s.length < 7) {
          return s.substring(0, 3) + "k"
        }
        else if(s.length>=7 && s.length <8){
             return s.substring(0,1) + "." + s.substring(1,2) + "M"
        }
        else {
          return s.substring(0,2) + "M"
        }
    
      }
  return (
    <Link to={"/trendingwatch?v="+vid.videoId}><div className='w-[900px] font-sans hover:bg-gray-800 rounded-xl cursor-pointer'>
        <div className='flex p-2'>
            <img src={vid.thumbnails[4].url} alt="thumbnail" className='h-[180px] w-[320px] rounded-xl '/>{vid.durationText.split(':')[0] <=1 ? <div className='mt-[150px] ml-[245px] w-[75px] absolute bg-[#000000CC] text-white text-center rounded-lg text-sm font-semibold '>
              SHORTS</div> :<div className='mt-[155px] ml-[265px] w-[50px] absolute bg-[#000000CC] font-semibold text-white text-center rounded-md text-sm '>{vid.durationText}</div> }
            <div className='p-2'>
                <div className='text-xl text-white p-1'>{vid.title}</div>
                <div className='flex text-sm text-[#AAAAAA] p-1'>
                    <div className='p-1'>{vid.channelName}</div>
                    <div className='p-1'>{conversionCount(vid.views.toString())} views</div>
                    <div className='p-1'>{vid.publishedText}</div>
                </div>
                <div className='text-sm mt-3 p-1 text-[#AAAAAA]'>{trimDescription(vid.description)}
                </div>
            </div>  
        </div>

    </div></Link>
  )
}

export default TrendingPage