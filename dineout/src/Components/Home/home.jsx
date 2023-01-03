import FeaturedRestaurants from "./FeaturedRestaurants/featuredRestaurant";
import Feature from "./Features/features";
import NearRestaurants from "./nearRestaurants/nearRestaurants";
import Offers from "./Offers/offers";
import SearchBar from "./searchbar/searcbar";

function Home() {
    return (
        <div>
            <SearchBar />
            <Offers />
            <NearRestaurants />
            <FeaturedRestaurants />
            <Feature />
        </div>
    )
}

export default Home;