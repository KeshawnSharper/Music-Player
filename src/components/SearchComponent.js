import React,{useEffect,useState} from 'react';
import InputBoxComponent from './InputBoxComponent';
import "./SearchComponent.css"
import SongListComponent from './SongListComponent';
import { connect } from "react-redux";
import { getMusic } from '../redux/reducers/actions/actions';

const SearchComponent = ( {songs,collection,getMusic}) => {
    const [songsFilter,setSongsFilter] = useState([])
    const [filterInput,setFilterInput] = useState({artist:"",songName:"",})

   useEffect(() => {
    getMusic()
    setSongsFilter(songs)
   },[])
    const resetSongs = songs

    const filterSongs = () => {
        setSongsFilter(songs)
        console.log(songsFilter)
        if (filterInput.artist === "" && filterInput.songName === ""){
           return  resetSongs
        }
        if (filterInput.artist !== "" && filterInput.songName === ""){
        setSongsFilter(songs.filter(song => song.artist.includes(filterInput.artist) ))
        console.log(songs.filter(song => song.artist.includes(filterInput.artist) ))
        }
        else if (filterInput.songName !== "" && filterInput.artist === ""){
            setSongsFilter(songsFilter.filter(song => song.songName.includes(filterInput.songName) ))
            console.log(songsFilter.filter(song => song.songName.includes(filterInput.songName) ))
        }
        else{
            setSongsFilter(songsFilter.filter(song => song.songName.includes(filterInput.songName) && song.artist.includes(filterInput.artist)))
            console.log(songsFilter.filter(song => song.songName.includes(filterInput.songName) && song.artist.includes(filterInput.artist)))
        }
        console.log(songsFilter,songs)

        }
    const handleChange = e => {
        setFilterInput({...filterInput,[e.target.name]:e.target.value})
        console.log(filterInput)
    }
    return (
        <>
        {
            songs.length > 0 ? 
        <>
        <InputBoxComponent handleChange={handleChange} name={'artist'} value={filterInput.artist} />
        <InputBoxComponent handleChange={handleChange} name={'songName'} value={filterInput.songName } />
        <SongListComponent songs={
            filterInput.artist === "" && filterInput.songName === ""
            ? 
            songs
            :
            filterInput.artist !== ""  && filterInput.songName === ""
            ?
            songs.filter(song => song.artist.includes(filterInput.artist))
            :
            filterInput.artist === "" && filterInput.songName !== ""
            ?
            songs.filter(song => song.songName.includes(filterInput.songName))
            :
            songs.filter(song => song.songName.includes(filterInput.songName) && song.artist.includes(filterInput.artist))
        } title={"Search Songs"} />
        </>
        :
        <></>
    }
    </>
    )
}
function mapStateToProps(state) {
    return {
      songs: state.songs["library"]
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getMusic: () => {
        dispatch(getMusic())
      }
      }
    };
  
  export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);


  
