import React from 'react'

const SharePopUp = ({setIsOpen,param}) => {
  const handlePopUp=()=>{
            setIsOpen(false)
  }

  const handleClipBoard=()=>{
        navigator.clipboard.writeText("https://youtu.be/"+param)
  }
  return (
    <>
    <div className=' fixed  top-[150px] left-[350px] w-[500px] h-[300px] rounded-lg bg-[#44454a]'>
        <div className='flex justify-end mt-2'>
        <div className='mr-2 w-fit h-fit'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12" className='cursor-pointer ' onClick={()=>handlePopUp()} /></svg></div>
        </div>
        <div className='flex justify-center items-center text-3xl font-bold'>Share</div>
        <div className='ml-[25px] mt-[60px] w-[450px] h-[50px] bg-[#32343c] text-center p-2'>{"https://youtu.be/"+param}<button className=' text-center p-1 w-[100px] ml-10 bg-blue-700 text-white font-md rounded-2xl' onClick={()=>handleClipBoard()}>Copy</button></div>
        </div>
  
    </>
  )
}

export default SharePopUp