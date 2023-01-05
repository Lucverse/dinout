import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import Slider from "react-slick"
import "./nearRestaurants.css";
import EachRestaurant from "./eachRestaurant";

const nearRestaurants = [
    {
        id: 1,
        image : "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-large",
        title: "Tamasha",
        place: "Cannaught Place, Central Delhi",
        rating: 4.2,
    },
    {
        id: 2,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/i/b/p971-165909823762e3d47db6d56.jpg?tr=tr:n-large",
        title: "Station Bar",
        place: "Cannaught Place, Central Delhi",
        rating: "4.0"
    },
    {
        id: 3,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/u/d/p97184-1648026866623ae4f24ea25.jpg?tr=tr:n-large",
        title: "Chido",
        place: "Cannaught Place, Central Delhi",
        rating: "4.2"
    },
    {
        id: 4,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/t/p27452-15020105505986dcb6d147f.jpg?tr=tr:n-large",
        title: "Local",
        place: "Cannaught Place, Central Delhi",
        rating: "4.0",
    },
    {
        id: 5,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/a/d/p32381-1495943585592a49a166fe7.jpg?tr=tr:n-large",
        title: "Ministry of Beer",
        place: "Cannaught Place, Central Delhi",
        rating: "4.0",
    },
    {
        id: 6,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/s/y/p20298-1664186585633178d99f1db.jpg?tr=tr:n-large",
        title: "The Junkyard Cafe",
        place: "Cannaught Place, Central Delhi",
        rating: "4.1",
    },
    {
        id: 7,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/u/y/p20941-15700828565d959028e9f28.jpg?tr=tr:n-large",
        title: "The Unplugged Courtyard",
        place: "Cannaught Place, Central Delhi",
        rating: "4.0",
    },
    {
        id: 8,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/m/u/p31393-15972091555f337a43bb961.jpg?tr=tr:n-large",
        title: "The G.T. Road",
        place: "Cannaught Place, Central Delhi",
        rating: "4.3",
        tag: "Friday Lunch Buffet(Veg Original)"
    },
    {
        id: 9,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/j/y/p19748-16474299906231c96621c58.jpg?tr=tr:n-large",
        title: "Openhouse Cafe",
        place: "Cannaught Place, Central Delhi",
        rating: "4.1",
    },
    {
        id: 10,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/e/p29906-16183962346076c44ac433d.jpg?tr=tr:n-large",
        title: "QBA",
        place: "Cannaught Place, Central Delhi",
        rating: "4.3",
    }
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

function NearRestaurants() {
    return (
        <div className="restaurants-width">
            <div className="width">
                <div className="near-title-bar">
                    <h2>Restaurants Near You</h2>
                    <p>See All</p>
                </div>
                <Slider {...settings}>
                    {nearRestaurants.map((elem) => {
                        return <EachRestaurant item={elem} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default NearRestaurants