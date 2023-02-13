import React from "react"
import InputBoxComponent from "../components/InputBoxComponent"
const ConvertView = ({handleChange,convertSongInput}) => {
    return (
        <>
        <h2>Convert Youtube link to mp3 </h2> 
        <InputBoxComponent name={"artist"} value={convertSongInput.artist} handleChange={handleChange}/>
        <InputBoxComponent name={"songName"} value={convertSongInput.songName} handleChange={handleChange}/>
        </>
        
    )
}
export default ConvertView