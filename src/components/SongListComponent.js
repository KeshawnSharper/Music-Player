import React, { useEffect,useState } from "react"
import List from '@mui/material/List';
import SongListItemView from "../views/SongListItemView";
import Divider from '@mui/material/Divider';
import { connect } from "react-redux";
import SongListItemComponent from "./SongListItemComponent";


const SongListComponent = ({songs,title}) => {
    const [songList,setSongsList] = useState(songs)
    useEffect(() => {
        setSongsList(songs)
    },songs)
    return (
        <>
        <h2 style={{"textAlign":"center"}}>{title}</h2>
       <br />
        <List>
        {
            songList && songList.length  > 1
            ?
            <>
            {songList.map((song,key) => (
                <>
                <SongListItemComponent song={song}  index={key} />
                <hr />
                </>
            ))}
            </>
            :
            <></>
        }
        
           
            </List>
            </>
    )
}


  
export default SongListComponent
