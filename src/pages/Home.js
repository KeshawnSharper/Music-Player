import React, { useState } from "react"
import FooterMusicPlayerComponent from "../components/FooterMusicPlayerComponent"
import MusicPlayerComponent from "../components/MusicPlayerComponent"
import ToolbarComponent from "../components/ToolBarComponent"
const Home = () => {
    return(
        <>
        <ToolbarComponent />
        <MusicPlayerComponent />
        <FooterMusicPlayerComponent />
        </>


    )
}
export default Home