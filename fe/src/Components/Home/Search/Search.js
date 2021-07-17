import React,{useState} from "react"

const Search = props => {
    const {handleChange,value} = props
return (
<>
<form>
    <input value={value.name} name="name" onChange={e => handleChange(e)} />
    <select id="cars" name="type" onChange={e => handleChange(e)}>
    <option value="song">Song</option>
    <option value="artist">Artist</option>
    <option value="album">Album</option>
    <option value="playlist">Playlist</option>
  </select>
</form>
</>
)
}
export default Search