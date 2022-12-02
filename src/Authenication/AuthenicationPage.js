import React from "react";
import "./AuthenicationPage.css"
import { Link } from "react-router-dom";
const AuthenicationPage = ({title,fields,handleChange,onSubmit=null,error,page}) => {
    console.log(page)
    return (
        <div>
             <div className="logincontainer">
         <div className="login">
          <h2>{title}</h2>
          <br />
          <p style={{color:"red"}}>{error}</p>
          {fields.map(field =>
            <div className="inputs">
               <label className="textlabel">{field.name}:</label>
               <br />
               <input name={field.name} onChange={handleChange} value={field.value} type={field.type} className="input" />
               <br />
            </div>
            )}
            <button className="btn" onClick={() => onSubmit()}>
            {title}
            </button>
            {
            page === "Login"
            ? 
            <Link to={"/register"}>
            <button className="btn">
            Register
            </button>
            </Link>
            :
            <Link to={"/login"}>
            <button className="btn" onClick={() => onSubmit()}>
            Login
            </button>
            </Link>
}
         </div>
      </div>
        </div>
    )
}
export default AuthenicationPage