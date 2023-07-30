

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomNameGenerate, randomStringGenerator } from '../utils/helper'
import Message from './Message'

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("")
    const chatMessages=useSelector((store)=>store.chat.messages)
     const dispatch=useDispatch()
    
      useEffect(()=>{
                 
             const interval=setInterval(()=>{
                      dispatch(addMessage({
                        name:randomNameGenerate(),
                        message:randomStringGenerator(15)
                      }))
             },2000)

             return ()=>clearInterval(interval)
         
      },[])
 
  return (
    <>
      <div className=' mt-10 w-[400px] h-[420px] border border-gray-400 overflow-y-scroll flex flex-col justify-end p-4 '>
                 {chatMessages.map((c)=><Message name={c.name} mess={c.message}/>)}
      </div>
      <form className='' onSubmit={(e)=>{
        e.preventDefault() 
        dispatch(addMessage({
            name:'Prajjwal',
            message:liveMessage
        }))
        setLiveMessage("")
    
    }
      }>
        <div className=' mt-1 flex justify-center'>
            <div>
            <input type="text" placeholder='chat...' className='pl-2 border border-gray-500 bg-[#202124] w-[360px] h-[30px] rounded-xl' value={liveMessage}
             onChange={(e)=>setLiveMessage(e.target.value)}
            />
            </div>
            </div>
      </form>
    </>
  )
}

export default LiveChat