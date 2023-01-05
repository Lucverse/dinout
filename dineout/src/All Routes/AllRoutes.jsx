import {Routes, Route} from "react-router-dom"
import Home from "../Components/Home/home"

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>  
        </div>
    )
}

export default AllRoutes;
