import React from "react";
import "./SongListItemView.css"
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import { ListItem } from "@mui/material";
import Box from '@mui/material/Box';



const SongListItemView = ({song,handleCurrentSong,addSong}) => {
    return (
        <div onClick={handleCurrentSong}>
        <div class="grid-container">
        <div class="item2">
        <img src={song.files.cover} />
        </div>
  <div class="item3">
    <p>{song.artist}</p>
    <p>{song.songName}</p>
    </div>  
  <div class="item4">
  <p style={{"fontSize":"30px","color":"red"}} onClick={() => addSong()}>&hearts;</p>
  </div>
</div>
        </div>

    )
}
export default SongListItemView