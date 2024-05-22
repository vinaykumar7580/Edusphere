import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import LectureInstructor from "../Pages/LectureInstructor"
import LectureDetailsInstructor from "../Pages/LectureDetailsInstructor"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instructor/lecture" element={<LectureInstructor/>} />
            <Route path="/instructor/lecture/:id" element={<LectureDetailsInstructor/>} />
        </Routes>
    )
}
export default AllRoutes