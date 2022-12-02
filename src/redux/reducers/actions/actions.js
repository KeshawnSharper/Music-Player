import axios from "axios";

export function getMusic () {
    console.log("hello from actions")
    return (dispatch) => {
    axios.get("https://gist.githubusercontent.com/abxlfazl/37404417d17230a629683eb3f2f0a88a/raw/366ad64df645e94592847283a306fe2276de458e/music-info.json")
    .then(res => {
        console.log("res",res)
        dispatch({type:"GET_MUSIC",payload:res.data})
    }
        )
   .catch(err => {
    console.log("err",err)
    dispatch({type:"GET_MUSIC",payload:err.data})
   })
}
}