import React,{useState} from "react"
import "./Search.css"
const Search = props => {
    const {handleChange,value} = props
return (
<header >
        <div class="search">
            <input type="text" placeholder="Search by song, artist, album, video, podcast ..."/>
            <ion-icon name="search"></ion-icon>
        </div>
        <div class="btn-settings">
            <ion-icon name="settings-outline"></ion-icon>
        </div>
    </header>
)
}
export default Search