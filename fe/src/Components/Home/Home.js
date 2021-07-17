import React,{useState} from "react"
import Search from "./Search/Search"
const Home = props => {
    const [value,setValue] = useState({name:"",type:"song"})
    const handleChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value})
    }
    return (
        <>
        <Search handleChange={handleChange} value={value}/>
        </>
    )
} 
export default Home