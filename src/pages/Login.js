import React, { useState } from "react"
import LoginComponent from "../Authenication/LoginComponent"
import Axios from "axios"
const Login = () => {
    const [error,setError] = useState("")
const submit = (user) => {
    const headers = {
        'Content-Type': 'text/plain'
    };
    Axios.post("http://localhost:3000/login",user,{headers})
    .then((res) =>{
    console.log(res)
    })
    .catch((error) =>{
    setError(error.response.data.message);
    })
    }


return (
    <LoginComponent submit={submit} error={error} page={"Login"}/>
)
}

export default Login
