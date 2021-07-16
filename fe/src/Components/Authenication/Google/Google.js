import React from "react"
import { GoogleLogin } from 'react-google-login';
import { Social_Login } from "../../../actions/actions";
import { connect } from "react-redux";

const Google = (props) => {
    const {Social_Login} = props
    const responseGoogle = (response) => {
        console.log(response);
        Social_Login({email:response.profileObj.email})
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
        Social_Login: (user) => {
        dispatch(Social_Login(user));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Google);