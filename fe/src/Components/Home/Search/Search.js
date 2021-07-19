import React,{useState} from "react"
import "./Search.css"
const Search = props => {
    const {handleChange,value} = props
return (
<header >
        <div class="search">
            <input type="text" value={value.name} placeholder="Search by song, artist, album, video, podcast ..." onChange={handleChange} name="name"/>
            <ion-icon name="search"></ion-icon>
        </div>
        <div class="btn-settings">
            <select value={value.type} onChange={handleChange} name="type">
                <option value="song">Song</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
            </select>
        </div>
    </header>
)
}
export default Search