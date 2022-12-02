import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
      case "GET_MUSIC":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        songs: state.payload
      }
      
    default:
      return initState;
  }
};