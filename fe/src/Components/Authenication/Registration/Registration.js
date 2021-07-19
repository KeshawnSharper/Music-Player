import React, { useState } from "react"
import Form from "../Form/Form"
import { register } from "../../../actions/Authenication_actions";
import { connect } from "react-redux";
const Registration = ({user,loading,register}) => {
    const [registerUser,setRegisterUser] = useState({
        "password":"",
        "email":"",
        "username":"",
        "re_password":""
    })
    const [error,setError] = useState("")
    const changeRegisterUser = e => {
      e.preventDefault()
      setRegisterUser({...registerUser,
        [e.target.name]: e.target.value
      })
      console.log(registerUser)
    }
    const errorCheck = () => {
      if (registerUser.email == "" || registerUser.password == "" || registerUser.re_password == "" || registerUser.username == ""){
        setError("Please make sure all fields are filled, Try again ")
        return false
      }
    }
    const submit = (e) => {
      e.preventDefault()
      if (errorCheck()){

      }
else{
  register(registerUser)
}
    }
    return (
        <div>
            <Form user={registerUser} error={error} submit={submit} changeUser={changeRegisterUser}/>
</div>
    )
}
function mapStateToProps(state) {
    return {
      user: state.user,
      loading: state.loading,
    }
  }
  // Login action will send the loginUser state to the redux store to adjust the store based on the response from the backend
  const mapDispatchToProps = (dispatch) => {
    return {
      register: (user) => {
        dispatch(register(user));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Registration);