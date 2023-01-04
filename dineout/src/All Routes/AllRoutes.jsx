import {Routes, Route} from "react-router-dom"
import Home from "../Components/Home/home"
import Blog from "../Components/Blog/Blog"
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<Blog/>}/>
            </Routes>  
        </div>
    )
}

export default AllRoutes