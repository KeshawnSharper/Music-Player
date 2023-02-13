import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import { ListItem } from "@mui/material";
import Box from '@mui/material/Box';
import MusicPlayerComponent from "../components/MusicPlayerComponent";
import { connect } from "react-redux";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from "@mui/icons-material/SkipNext";


const FooterMusicPlayerView = ({currentSong,songs,collectio,nextSong,previousSong}) => {
  return (
        <>
        <div className="container" style={{
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  background:"white",
  fontSize: "10px",
  textAlign: "center",
}}>
   {
    currentSong
    ?

            <> 
             <img src={currentSong.files.cover} height="20px" width="20px" style={{borderRadius:"50%"}}/>
            <p>{currentSong.artist}</p>
    <p>{currentSong.songName}</p>
    <div onClick={previousSong} >
    <SkipPreviousIcon  /> 
    </div>
    <div onClick={nextSong}>
    <SkipNextIcon /> 
    </div>
    <MusicPlayerComponent  song={currentSong.files.song}/>

    <Box sx={{ width: '100%' }}>
    </Box>
    </>   
    :
    <>
    </>
}

    
</div>
        </>

    )
}

export default FooterMusicPlayerView