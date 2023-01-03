import "./features.css";

const features = [
    {
        id: 1,
        title: "Buffet",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
    },
    {
        id: 2,
        title: "Pocket Friendly",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png"
    },
    {
        id: 3,
        title: "Pet Friendly",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png"
    },
    {
        id: 4,
        title: "Must Visit",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/must_visit.png"
    },
    {
        id: 5,
        title: "Family Time",
        icon: "	https://im1.dineout.co.in/images/uploads/misc/2020/May/8/family_time.png"
    },
    {
        id: 6,
        title: "Pure Veg",
        icon: "	https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png"
    },
    {
        id: 7,
        title: "New On Dineout",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png"
    },
    {
        id: 8,
        title: "Happiest Hours",
        icon: "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/happiest_hour.png"
    }
]

function Feature() {
    return (
        <div>
            <div className="features-section">
                {features.map((elem, i) => {
                    return (
                        <div className="feature-card">
                            <div className="individual-card">
                                <img src={elem.icon} alt={elem.icon} />
                                <span>{elem.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feature;