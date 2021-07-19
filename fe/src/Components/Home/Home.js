import React,{useState} from "react"
import Search from "./Search/Search"
import Player from "./Player/Player"
import SideBar from "../../Components/Menu/SideBar/Sidebar"
import Songs from "./Songs/Songs"
import "./Home.css"
const Home = props => {
    const [value,setValue] = useState({name:"",type:"song"})
    const handleChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value})
    }
    return (
        <div className="background">
        <SideBar />
        <section class="container">
        <Search handleChange={handleChange} value={value}/>
        <Songs />
        </section>
        </div>
    )
} 
export default Home