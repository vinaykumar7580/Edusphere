import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Signup from "../Pages/Signup"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}
export default AllRoutes