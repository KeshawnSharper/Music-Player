import React,{useState} from "react"
import ConvertView from "../views/ConvertView"
import "./ConvertComponent.css"
const ConvertComponent = () => {
    const [convertSongInput,setConvertSongInput] = useState({"artist":"","songName":"","files":{"cover":"","song":""}})
const handleChange = (e) => {
    setConvertSongInput({...convertSongInput,[e.target.name]:e.target.value})
}
const convertSong = () => {
console.log(convertSongInput)
}
    return (
    <>
    <ConvertView handleChange={handleChange} convertSongInput={convertSongInput}/>
    <button onClick={convertSong}>
        Convert Song
    </button>
    </>
)
}
export default ConvertComponent
