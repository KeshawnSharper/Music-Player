import React, { useState } from "react"
import RegisterComponent from "../Authenication/RegisterComponent"
import Axios from "axios"

const Register = () => {
    const [error,setError] = useState("")
    const submit = (user) => {
        const headers = {
            'Content-Type': 'text/plain'
        };
        Axios.post("http://localhost:3000/register",user,{headers})
        .then((res) =>{
        console.log(res)
        })
        .catch((error) =>{
            console.log(error)
        setError(error.response.data.message);
        })
        }
return (
    <RegisterComponent submit={submit} error={error} page={"Register"} />
)
}

export default Register
