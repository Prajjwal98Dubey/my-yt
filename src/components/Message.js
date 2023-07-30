import React from 'react'

const Message = ({name,mess}) => {
  return (
    <>
      <div className="flex items-center shadow-md text-white p-1">
        <div>
            <img className='w-7 h-8 rounded-full' src="https://yt4.ggpht.com/ytc/AOPolaSFujA_FFqEdY4Gr-bhIuj8ZVEWi0-v1gExYA=s32-c-k-c0x00ffffff-no-rj" alt="user" />
        </div>
        <div className="">
            <span className="font-bold m-1 text-1xl">{name}</span>
            <span className="text-sm">{mess}</span>
        </div>
        </div>
    </>
  )
}

export default Message

// https://yt4.ggpht.com/ytc/AOPolaSFujA_FFqEdY4Gr-bhIuj8ZVEWi0-v1gExYA=s32-c-k-c0x00ffffff-no-rj

// https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png