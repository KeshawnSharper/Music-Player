import React,{} from "react"
import SongListItemView from "../views/SongListItemView"
import { setCurrentSong,saveSong } from "../redux/reducers/actions/actions"
import { connect } from "react-redux";

const SongListItemComponent = ({song,setCurrentSong,index,user,saveSong}) => {
   const  addSong = () => {
    saveSong(user.id,song)
   }
    
    return (
        <div 
        style={{"cursor":"pointer"}}
        onClick={() => setCurrentSong("library",song.id)}>
        <SongListItemView song={song} addSong={() => addSong()}/>
        </div>
     )
}
function mapStateToProps(state) {
    return {
      songs: state.songs["library"],
      user:state.user
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
      setCurrentSong: (collection,id) => {
        dispatch(setCurrentSong(collection,id))

      },
      saveSong:(user_id,song) => {
        dispatch(saveSong(user_id,song))
      }
      }
    }

   export default connect(mapStateToProps,mapDispatchToProps)(SongListItemComponent);