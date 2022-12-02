import React, { useState } from "react"
import MusicPlayerComponent from "../components/MusicPlayerComponent"
import ToolbarComponent from "../components/ToolBarComponent"
import FooterMusicPlayerView from "../views/FooterMusicPlayerView"
const Home = () => {
    return(
        <>
        <ToolbarComponent />
        <MusicPlayerComponent />
        <FooterMusicPlayerView />
        
        </>


    )
}
export default Home