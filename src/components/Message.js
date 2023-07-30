import React from 'react'

const Message = ({name,mess}) => {
  return (
    <>
      <div className="flex items-center shadow-md text-white">
        <div>
            <img className='w-10 h-10' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user" />
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