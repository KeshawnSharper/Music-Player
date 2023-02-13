import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
      case "GET_MUSIC":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        songs: {...state.songs,"library":action.songs},
        currentSong:action.currentSong
      }
      case "NEXT_SONG":
        return {
          ...state,
          songIndex: state.songIndex === state.songs[state.collection].length - 1 ? 0 : state.songIndex + 1,
        }
        case "PREVIOUS_SONG":
          return {
            ...state,
            songIndex: state.songIndex === 0 ? state.songs[state.collection].length - 1 : state.songIndex - 1,
          }
          case "CHANGE_SONG_BY_INDEX":
              return{
                ...state,
                currentSong:state.songs[state.collection][state.songIndex]
              }

          case "SET_CURRENT_SONG":
          return {
            ...state,
              collection:action.collection,
              songIndex:action.index
          }
          case "SAVE_SONG":
            // check if the song is in user songs library 
            return {
              ...state,
                songs:{...state.songs,userSongs:action.usersongs},
                songIndex:action.index
            }
      
    default:
      return initState;
  }
};