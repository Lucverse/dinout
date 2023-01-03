import {Routes, Route} from "react-router-dom"
import Home from "../Components/Home/home"
import Product from "../Components/ProductPages/Product";


function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product/>}/>
            </Routes>  
        </div>
    )
}

export default AllRoutes;