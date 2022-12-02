import React from "react"
import List from '@mui/material/List';
import SongListItemView from "../views/SongListItemView";
import Divider from '@mui/material/Divider';

const SongListComponent = ({songsList=null}) => {
    return (
        <>
        <h2 style={{"textAlign":"center"}}>Saved Songs</h2>
       <br />
       <Divider />
        <List>
            {/* {songsList.map((song) => {
                <SongListItemView />
            })} */}
            <SongListItemView />
            <Divider />
            </List>
            </>
    )
}
export default SongListComponent