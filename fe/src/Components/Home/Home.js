import React,{useState} from "react"
import Search from "./Search/Search"
import Player from "./Player/Player"
import SideBar from "../../Components/Menu/SideBar/Sidebar"
const Home = props => {
    const [value,setValue] = useState({name:"",type:"song"})
    const handleChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value})
    }
    return (
        <>
        <SideBar />
        <Search handleChange={handleChange} value={value}/>
        <Player />
        </>
    )
} 
export default Home