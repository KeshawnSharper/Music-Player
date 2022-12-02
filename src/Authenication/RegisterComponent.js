import React, { useState } from "react"
import AuthenicationPage from "./AuthenicationPage"

const RegisterComponent = ({submit,error,page}) => {
    const [fieldValues,setFieldValues] = useState({username: "", password: "",email:""})
    const handleChange = e => {
        setFieldValues({...fieldValues, [e.target.name]: e.target.value})
    }
    return (
        <div>
           <AuthenicationPage title={"Register"} fields={[{name:"username",value:fieldValues.username,type:"text"},{name:"password",value:fieldValues.password,type:"password"},{name:"email",value:fieldValues.email,type:"text"}]}  handleChange={handleChange} page={page} onSubmit={() => submit(fieldValues)}/>       
            </div>
    )
}

export default RegisterComponent