import React, { useState } from "react"
import Form from "../Form/Form"
import { login } from "../../../actions/actions";
import { connect } from "react-redux";

const Login = (props) => {
  const {login,appError} = props
    const [loginUser,setLoginUser] = useState({
        "password":"",
        "email":""
    })
    const [error,setError] = useState("")
    const changeLoginUser = e => {
      e.preventDefault()
      setLoginUser({...loginUser,
        [e.target.name]: e.target.value
      })
      console.log(loginUser)
    }
    const errorCheck = () => {
      if (loginUser.email == "" || loginUser.password == ""){
        setError("Email and/or password doesn't meet requirements, Try again ")
        return true
      }
      return false
    }
    const submit = (e) => {
      e.preventDefault()

      if (errorCheck()){
        return
      }
else{
  login(loginUser)

}
    }
    return (
       <div data-testid="login-head">

          <Form user={loginUser} appError={appError} error={error} changeUser={changeLoginUser} submit={submit} />
       </div>
    )
}
function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
    appError: state.error
  };
}
// Login action will send the loginUser state to the redux store to adjust the store based on the response from the backend
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);