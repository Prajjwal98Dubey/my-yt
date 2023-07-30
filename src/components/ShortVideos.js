import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const ShortVideos = ({i}) => {
    const[isClicked,setIsClicked] =useState(false)
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
        else if(s.length>=7){
                return s.substring(0,1) + "."+ s.substring(1,2) + "M"
        }
        else {
          return s
        }
    
      }
  
       useEffect(()=>{

       },[isClicked])

  return (
    <>
          <div className='w-[500px] h-[580px] text-white flex '>
           {isClicked ? <div className='cursor-pointer'>
            <ReactPlayer
               width='315px' 
               height='560px'
               url={i.play}
               playing={true}
               controls
            />
           </div>:<div className='cursor-pointer' onClick={()=>setIsClicked(true)}>
                <img className='rounded-xl w-[315px] h-[560px] text-white'  src={i.origin_cover} alt="loading" />
            </div>} 
            <div className='mt-[130px] p-3'>
                  <div className='w-[60px] p-1  flex justify-center h-[60px] mt-[10px] mb-[10px] hover:bg-[#484c57] rounded-xl'>
                    <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg></div>
                    <div>{conversionLikes((i.digg_count).toString())}</div>
                  </div>
                  </div>
                  <div className='w-[70px] p-1  flex justify-center h-[60px] mt-[10px] mb-[10px] hover:bg-[#484c57] rounded-xl'>
                    <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg></div>
                    <div>Dislike</div>
                    </div>
                  </div>
                  <div className='w-[70px] p-2 flex justify-center h-[60px] mt-[10px] mb-[10px] hover:bg-[#484c57] rounded-xl'>
                    <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                    <div>{conversionLikes((i.comment_count).toString())}</div>
                    </div>
                  </div>
                  <div className='w-[70px] p-1  flex justify-center h-[60px] mt-[10px] mb-[10px] hover:bg-[#484c57] rounded-xl'>
                    <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward"><polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg></div>
                    <div>Share</div>
                    </div>
                  </div>
            </div>
              
          </div>
    </>
  )
}

export default ShortVideos