import "./eachRestaurant.css";

function EachRestaurant({item}) {
    return (
        <div className="single-restaurant">
            <div className="max-width">
            <div className="restaurant-cover-div">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="restaurant-info"> 
                <div className="restaurant-title">
                    <h4>{item.title}</h4>
                    <p>{item.place}</p>
                </div>
                <div className="restaurant-rating">
                    <p>{item.rating}</p>
                </div>
            </div>
            <div>
                {item.tag ? 
                <div className="restaurant-tag">
                    <i class="fa-solid fa-percent"></i>
                    <p>{item.tag}</p>
                </div>
                 : ""}
            </div>
            </div>
        </div>
    )
}

export default EachRestaurant;