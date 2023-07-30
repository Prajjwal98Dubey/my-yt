import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import VIdeoContainer from './VIdeoContainer'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className='flex'>
                <div> <SideBar /></div>
                <div><VIdeoContainer /></div>

            </div>
        </>

    )
}

export default Home