import axios from "axios";

export function getMusic () {
    console.log("hello from actions")
    return (dispatch) => {
    axios.get("https://gist.githubusercontent.com/abxlfazl/37404417d17230a629683eb3f2f0a88a/raw/366ad64df645e94592847283a306fe2276de458e/music-info.json")
    .then(res => {
        console.log("res",res)
        dispatch({type:"GET_MUSIC",songs:res.data.songs.map((song,key) => ({...song,id:key})),currentSong:res.data.songs[0]})
   
    }
        )
   .catch(err => {
    console.log("err",err)
    dispatch({type:"GET_MUSIC",payload:err.data})
   })
}
}
export function previousSong () {
    return (dispatch) => {
        dispatch({type:"PREVIOUS_SONG"})
        dispatch({type:"CHANGE_SONG_BY_INDEX"})
    }
}
export function nextSong () {
    return (dispatch) => {
        dispatch({type:"NEXT_SONG"})
        dispatch({type:"CHANGE_SONG_BY_INDEX"})
    }
}
export function setCurrentSong(collection,index){
    return (dispatch) =>{
        dispatch({type:"SET_CURRENT_SONG",collection:collection,index:index})
        dispatch({type:"CHANGE_SONG_BY_INDEX"})
    }
}
export function saveSong(user_id,song,savedSongs=null){

    // get the saved songs 


    const headers = {
        'Content-Type': 'text/plain'
    };
    const savedSong = {"ID":1,"SongName":song.songName,"Artist":song.artist,"UserID":user_id,"Src":song.files.song,"Cover":song.files.cover,"SongID":song.id}
    console.log(savedSong)
    return (dispatch) => {
    axios.post("http://localhost:3000/savesong",savedSong,{headers})
    .then(res => {
        dispatch({type:"SAVE_SONG"})
    }
        )
   .catch(err => {
    console.log("err",err)
    dispatch({type:"GET_MUSIC",payload:err.data})
   })
    }
}
export function getUserSavedMusic (user_id) {

    return (dispatch) => {
    axios.get(`http://localhost:3000/savedsongs?user_id=${user_id}`)
    .then(res => {
        console.log("res",res)
        let obj = {}
        res.data.songs.map((song,key) => obj[song.song_id] = 1 )
        dispatch({type:"GET_SAVED_MUSIC",songs:res.data.songs.map((song,key) => ({...song,id:key})),currentSong:res.data.songs[0],
        savedSongsObj:obj
    })
   
    }
        )
   .catch(err => {
    console.log("err",err)
    dispatch({type:"GET_MUSIC",payload:err.data})
   })
}
}