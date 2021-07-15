import React from "react"
import { GoogleLogin } from 'react-google-login';
const Google = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
<GoogleLogin
    clientId={"131493700450-gtmuc69k3tbalgar5c5o7ch27v5i4qml.apps.googleusercontent.com"}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
/>
    )
}
export default Google