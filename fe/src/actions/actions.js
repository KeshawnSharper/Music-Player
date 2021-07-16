import axios from "axios"

// login action
export function login(user) {
    return (dispatch) => {
      //   Load Login
      dispatch({ type: "LOGIN_LOADING" });
      // send login credentials from Login page to the backend
    axios
    .post(`http://localhost:5000/users/login`, user)
    .then((response) => {
      dispatch({
        type: "LOGIN",
        payload: { username: response.data.username, id: response.data.id }
      })
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",response.data.username)
      localStorage.setItem("id",response.data.id)
    })
    .catch((err) => dispatch({ type: "LOGIN_FAIL", payload: err }))
}
  }
  export function Social_Login(user) {
    return (dispatch) => {
      //   Load Login
      dispatch({ type: "SOCIAL_LOGIN_LOADING" })
      // send login credentials from Login page to the backend
    axios
    .post(`http://localhost:5000/users/Social_Login`, user)
    .then((response) => {
      dispatch({
        type: "SOCIAL_LOGIN",
        payload: { username: response.data.username, id: response.data.id }
      })
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",response.data.username)
      localStorage.setItem("id",response.data.id)
    })
    .catch((err) => dispatch({ type: "SOCIAL_LOGIN_FAIL", payload: err }))
}
  }
// register action that logs user in once registered
export function register(user) {
    return (dispatch) => {
      //   Load register
      dispatch({ type: "REGISTER_LOADING" })
      // send register credentials to backend
      axios
        .post(`http://localhost:5000/users/register`, user)
        .then((response) => {
          console.log(response)
          dispatch({
            // Loggs that the user is successfully registered
            type: "REGISTER",payload:response.data
          });
        })
        .catch((err) => {
          dispatch({ type: "REGISTER_FAIL", payload: err });
        });
    };
  }