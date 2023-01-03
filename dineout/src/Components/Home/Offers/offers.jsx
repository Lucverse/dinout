import "./offers.css";

const offers = [
    {
        id: 1,
        image: "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small"
    },
    {
        id: 2,
        image: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small"
    },
    {
        id: 3,
        image: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small"
    },
    {
        id: 4,
        image: "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small"
    }
]

function Offers() {
    return (
        <div className="best-offers-section">
            <div className="best-offers-section-div">
                <h2>Best Offers</h2>
                <div className="offers-images">
                    {offers.map((elem) => {
                        return (
                            <div className="offer-image-div" key={elem.id}>
                                <img src={elem.image} alt={elem.id} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Offers;