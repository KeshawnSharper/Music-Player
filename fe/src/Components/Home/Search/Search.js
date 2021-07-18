import React,{useState} from "react"
import "./Search.css"
const Search = props => {
    const {handleChange,value} = props
return (
<>
<form>
<div class="searchBox">


<input class="searchInput"type="text" placeholder="Search" value={value.name} name="name" onChange={e => handleChange(e)} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
<button class="searchButton" href="#">
<i class="fa fa-search" aria-hidden="true"></i>
</button>
<select class="searchInput" name="type" onChange={e => handleChange(e)}>
    <option value="song">Song</option>
    <option value="artist">Artist</option>
    <option value="album">Album</option>
    <option value="playlist">Playlist</option>
  </select>
</div>


   
</form>
</>
)
}
export default Search