import React from "react";
import "./SongListItemView.css"
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import { ListItem } from "@mui/material";
import Box from '@mui/material/Box';



const SongListItemView = ({artist,songName,albumName}) => {
    return (
        <>
        <div class="grid-container">
        <div class="item2">
        <img src="https://res.cloudinary.com/di449masi/image/upload/v1667937480/Chris_Brown_-_Wall_To_Wall_single_cover_makayu.jpg" />
        </div>
  <div class="item3">
    <p>Chris Brown</p>
    <p>Wall to Wall</p>
    <p>Wall to Wall</p>
    </div>  
  <div class="item4">
  <PauseIcon />
  </div>
  <div class="item5">
  <Box sx={{ width: '95%' }}>
      <LinearProgress variant="determinate" value={70} />
    </Box>
  </div>
</div>
        </>

    )
}
export default SongListItemView