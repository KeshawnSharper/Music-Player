import React from "react"

export const Search = (value) => {
    return (dispatch) => {
        //   Load Login
        dispatch({ type: "SEARCH_LOADING" });
        // send login credentials from Login page to the backend
      axios
      .post(`http://localhost:5000/users/login`, user)
      .then((response) => {
        dispatch({
          type: "SEARCH",
          payload: { username: response.data.username, id: response.data.id }
        })
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("username",response.data.username)
        localStorage.setItem("id",response.data.id)
      })
      .catch((err) => dispatch({ type: "SEARCH_FAIL", payload: err }))
  }
}