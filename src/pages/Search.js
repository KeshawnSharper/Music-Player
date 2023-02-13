import React, { useState } from "react"
import FooterMusicPlayerComponent from "../components/FooterMusicPlayerComponent"
import MusicPlayerComponent from "../components/MusicPlayerComponent"
import SearchComponent from "../components/SearchComponent"
const Search = ({songs}) => {
    return (
        <>
<SearchComponent songs={songs}/>
<FooterMusicPlayerComponent />
</>
    )
}
export default Search