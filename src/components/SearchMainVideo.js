import React from 'react'
import { useState , useEffect} from 'react'
import SharePopUp from './SharePopUp'
const SearchMainVideo = ({param}) => {
    return (
        <>
           <div>
           <iframe width="700" height="400" src={"https://www.youtube.com/embed/"+param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen className='rounded-xl'></iframe>
           </div>
        </>
    )
}

export default SearchMainVideo