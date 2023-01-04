import "../nearRestaurants/nearRestaurants.css";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import Slider from "react-slick"
import EachRestaurant from "../nearRestaurants/eachRestaurant";

const featuredRestaurant = [
    {
        id: 1,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/i/b/p971-165909823762e3d47db6d56.jpg?tr=tr:n-large",
        title: "Station Bar",
        place: "Cannaught Place, Central Delhi",
        rating: "4.0",
        tag: "Flat 25% Off the Total Bill",
    },
    {
        id: 2,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/a/i/p9229-164060223661c99a7cab578.jpg?tr=tr:n-large",
        title: "Downtown - Diners & Living Beer Cafe",
        place: "Sector 29, Gurgaon",
        rating: "4.7",
        tag: "Flat 10% Off the Total Bill"
    },
    {
        id: 3,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/q/z/p20785-163299277561557e0792fc1.jpg?tr=tr:n-large",
        title: "Elation",
        place: "Greater Kailash - 1, South Delhi",
        rating: "4.0",
        tag: "Flat 25% Off the Total Bill",
    },
    {
        id: 4,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/v/k/p23764-16118396646012b8b01badf.jpg?tr=tr:n-large",
        title: "The Junkyard Cafe",
        place: "Cannaught Place, Central Delhi",
        rating: "4.2",
        tag: "Flat 20% Off the Total Bill"
    },
    {
        id: 5,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/v/k/p23764-16118396646012b8b01badf.jpg?tr=tr:n-large",
        title: "TOS - Take Off Scarlett",
        place: "Punjabi Bagh, West Delhi",
        rating: "4.2",
        tag: "Flat 20% Off the Total Bill"
    },
    {
        id: 6,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/d/f/p69146-16614287776307642999f0a.jpg?tr=tr:n-large",
        title: "Cafe High 5",
        place: "Cannaught Place, Central Delhi",
        rating: "4.3",
        tag: "Flat 30% Off the Total Bill"
    },
    {
        id: 7,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/m/a/p9875-1645177960620f6c68ecfef.jpg?tr=tr:n-large",
        title: "Glasshouse",
        place: "Sector 50, Gurgaon",
        rating: "4.1",
        tage: "Flat 15% Off the Total Bill"
    },
    {
        id: 8,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/z/j/p110215-16678185106368e40e4ed1e.jpg?tr=tr:n-large",
        title: "Dome Oven",
        place: "Indirapuram, Ghaziabad",
        rating: "5.0",
        tage: "Flat 15% Off the Total Bill"
    },
    {
        id: 9,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/j/p112593-1670482376639189c833ed7.jpg?tr=tr:n-large",
        title: "Bellagio",
        place: "Sector 58, Gurgaon",
        rating: "5.0",
        tag: "Flat 20% Off the Total Bill"
    },
    {
        id: 10,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/m/a/p112671-167203815563a9470b65d21.jpg?tr=tr:n-large",
        title: "Noiz",
        place: "Andrew Ganj, South Delhi",
        rating: "4.5",
        tage: "Flat 20% Off the Total Bill"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

function FeaturedRestaurants() {
    return (
        <div className="restaurants-width">
            <div className="width">
                <div className="near-title-bar">
                    <h2>Featured Restaurant</h2>
                    <p>See All</p>
                </div>
                <Slider {...settings}>
                    {featuredRestaurant.map((elem) => {
                        return <EachRestaurant item={elem} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedRestaurants