import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import { ListItem } from "@mui/material";
import Box from '@mui/material/Box';



const FooterMusicPlayerView = ({artist,songName,albumName}) => {
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
                
            <img src="https://res.cloudinary.com/di449masi/image/upload/v1667937480/Chris_Brown_-_Wall_To_Wall_single_cover_makayu.jpg" height="20px" width="20px" style={{borderRadius:"50%"}}/>
            <p>Chris Brown</p>
    <p>Wall to Wall</p>
    <p>Wall to Wall</p>
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={70} />
    </Box>
    <PauseIcon />

    
</div>
        </>

    )
}
export default FooterMusicPlayerView