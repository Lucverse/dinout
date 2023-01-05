import FeaturedRestaurants from "./FeaturedRestaurants/featuredRestaurant";
import Feature from "./Features/features";
import NearRestaurants from "./nearRestaurants/nearRestaurants";
import Offers from "./Offers/offers";
import SearchBar from "./searchbar/searcbar";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";
function Home() {
    return (
        <div>
            <Navbar/>
            <SearchBar />
            <Offers />
            <NearRestaurants />
            <FeaturedRestaurants />
            <Feature />
            <Footer/>
        </div>
    )
}

export default Home;