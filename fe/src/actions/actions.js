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
      console.log(response)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",response.data.username)
      localStorage.setItem("id",response.data.id)
    })
    .catch((err) => dispatch({ type: "LOGIN_FAIL", payload: err }));
}
  }
// register action that logs user in once registered
export function register(user) {
    return (dispatch) => {
      //   Load register
      dispatch({ type: "REGISTER_LOADING" });
      // send register credentials to backend
      axios
        .post(`http://localhost:5000/users/register`, user)
        .then((response) => {
          dispatch({
            // Loggs that the user is successfully registered
            type: "REGISTER"
          });
        })
        .catch((err) => {
          dispatch({ type: "REGISTER_FAIL", payload: err });
        });
    };
  }