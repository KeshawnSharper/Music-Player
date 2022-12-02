import React, { useState } from "react"
import AuthenicationPage from "./AuthenicationPage"

const LoginComponet = ({submit,error,page}) => {
    const [fieldValues,setFieldValues] = useState({username: "", password: ""})
    const handleChange = e => {
        setFieldValues({...fieldValues, [e.target.name]: e.target.value})
    }
    return (
        <div>
           <AuthenicationPage title={"Login"} fields={[{name:"username",value:fieldValues.username,type:"text"},{name:"password",value:fieldValues.password,type:"password"}]}  handleChange={handleChange} onSubmit={() => submit(fieldValues)} error={error} page={page}/>       
            </div>
    )
}

export default LoginComponet