import React, { useState } from "react"
import Form from "../Form/Form"
const Login = () => {
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
  console.log("hi")
}
    }
    return (
        <div>
            <Form user={registerUser} error={error} submit={submit} changeUser={changeRegisterUser}/>
</div>
    )
}
export default Login