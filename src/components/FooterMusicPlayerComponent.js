import React, {useEffect,useState} from "react"
import FooterMusicPlayerView from "../views/FooterMusicPlayerView";
import { connect } from "react-redux";
import {
    nextSong,
    previousSong
  } from "../redux/reducers/actions/actions";
const FooterMusicPlayerComponent = ({currentSong,collection,songs,nextSong,previousSong}) => {
    return (
    <>
    {
        currentSong
        ?
    <FooterMusicPlayerView currentSong={currentSong} collection={collection} songs={songs}  nextSong={() => nextSong()} previousSong={() => previousSong()}/>
    :
    <></>
    }
    </>
 )
}
const mapDispatchToProps = (dispatch) => {
    return {
      nextSong: () => {
        dispatch(nextSong());
      },
      previousSong: () => {
        dispatch(previousSong())
      }
      }
    };
function mapStateToProps(state) {
    return {
      songs: state.songs["library"],
      currentSong:state.currentSong,
      collection:state.collection,
      songIndex:state.songindex
    
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(FooterMusicPlayerComponent);