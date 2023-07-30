
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [text,setText]=useState("")
  const[suggest,setSuggest]=useState([])
  const[isLoading,setIsLoading]=useState(true)

   useEffect(()=>{
          const getSugesstions=async()=>{
            const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=[YOUR_API_KEY]`)       
            const json=await data.json()
            setSuggest(json.items)
            setIsLoading(false)
          }
          setTimeout(()=>{
             const timer = getSugesstions()
             return ()=>clearTimeout(timer)
          },5000)
         
   },[text])
   if(isLoading){
    return <div>Loading...</div>
   }

  return (
    <div className=' z-10 bg-[#25272c] sticky top-0 overflow-hidden w-[100%]'>
    <div className='flex justify-around p-2 border border-[#393a3e]'>
         <div className='flex'>
           <Link to='/'> <img className='w-[60px]' src="youtube.png" alt="loading" /></Link>
         </div>
         <div className='flex'>
          <div>
            <input type="text" className='ml-3 bg-[#202124] p-2 text-white border border-[#67696f] w-[550px] mt-2 h-[40px] rounded-2xl' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search' />
           {text ? <Link to={"/search-results?v="+text}><div className=' ml-3 mt-1 rounded-lg w-[550px] text-white bg-[#202124] fixed'>
              <ul>
                {suggest.slice(0,17).map((s)=><li className='h-[40px] text-lg font-semibold text-white p-3 hover:bg-[#3b3e47] cursor-pointer' key={s.etag}>{s.snippet.channelTitle}</li>)}
              </ul>
            </div></Link>:null} 
            
            </div>
            <div className='mt-3 ml-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
         </div>
         <div>
            <img src="avatar.png" className='w-[60px] rounded-sm' alt="user" />
            {console.log(suggest)}
         </div>
    </div>
    </div>
  )
}

export default NavBar
