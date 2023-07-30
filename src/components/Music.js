import React from 'react'
import ReactPlayer from 'react-player'

const Music = () => {
  return (
    <>
       <ReactPlayer
       width='480px'
       height='560px'
       url="https://v16m-default.akamaized.net/d6308d3f9e83782fd2ebb6b8efe45f6a/64c69e71/video/tos/maliva/tos-maliva-ve-0068c799-us/oIZHvpJ1AfjgDejI8vAKohRnlAvkUUqCc6bfRF/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3058&bt=1529&cs=0&ds=6&ft=iJOG.y7oZzv0PD1ybpoXg9wlmCMrBEeC~&mime_type=video_mp4&qs=0&rc=MzNpOzhpNWhnM2k0ZDtmOUBpajtpaTQ6ZmlxbDMzZzczNEA0YGAvYC9eNTYxXl8xYmBhYSMwaV9gcjRnbmhgLS1kMS9zcw%3D%3D&l=202307301130542D403269B70EB58121A9&btag=e00098000"
       controls
       />
    </>
  )
}

export default Music