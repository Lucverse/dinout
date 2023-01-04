import { NavLink } from "react-router-dom";
function MoreOptions() {
    var discover = ['Trending Restaurants', 'Super Savers', 'Dineout Pay', 'Contactless Dining'];
    var about = ['About us', 'Blog', 'Careers', 'Dineout for Business', 'Add Restaurant', 'Terms & Conditions', 'Privacy Policy'];
    var topcuisines = ['Chinese', 'Italian', 'South India', 'Mexican', 'Bengali', 'Thai'];
    var topfacilities = ['Fine Dining', '5 Star', 'Roofttop'];
    var toplocations = ['Rajouri Garden', 'Hauz Khaz', 'DLF Cyber City', 'Connaught place', 'Khan Market', 'Dwarka'];
    return (
        <div className="moreoptiondiv">
            <div>
                <h4>Discover</h4>
                <div className="options">
                    {
                        discover.map((ele, i) => {
                            return (
                                <div style={{ padding: '5px' }}>
                                    <NavLink to={ele} style={{ textDecoration: 'none', color: 'black' }}>
                                        {ele}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h4>About</h4>
                <div className="options">
                    {
                        about.map((ele, i) => {
                            return (
                                <div style={{ padding: '5px' }}>
                                    <NavLink to={ele} style={{ textDecoration: 'none', color: 'black' }}>
                                        {ele}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h4>Top Cuisines</h4>
                <div className="options">
                    {
                        topcuisines.map((ele, i) => {
                            return (
                                <div style={{ padding: '5px' }}>
                                    <NavLink to={ele} style={{ textDecoration: 'none', color: 'black' }}>
                                        {ele}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h4>Top Facilities</h4>
                <div className="options">
                    {
                        topfacilities.map((ele, i) => {
                            return (
                                <div style={{ padding: '5px' }}>
                                    <NavLink to={ele} style={{ textDecoration: 'none', color: 'black' }}>
                                        {ele}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h4>Top Locations</h4>
                <div className="options">
                    {
                        toplocations.map((ele, i) => {
                            return (
                                <div style={{ padding: '5px' }}>
                                    <NavLink to={ele} style={{ textDecoration: 'none', color: 'black' }}>
                                        {ele}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default MoreOptions;