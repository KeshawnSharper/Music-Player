import React, { useState } from "react"
import Form from "../Form/Form"
const Login = () => {
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
        return false
      }
    }
    const submit = (e) => {
      e.preventDefault()
      if (errorCheck()){
      }
else{
  console.log("hi")
}
    }
    return (
       <div data-testid="login-head">

          <Form user={loginUser} error={error} changeUser={changeLoginUser} submit={submit} />
       </div>
    )
}
export default Login