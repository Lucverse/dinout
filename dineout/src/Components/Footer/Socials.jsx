import { NavLink } from "react-router-dom";
function Socials() {
    return (
        <div>
            <NavLink to='/'>
                <img src='https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png' className='navLogo' alt='navlogo' />
            </NavLink>
            <div>Find the best Restaurants, Deals, Discounts & Offers</div>
            <p>Contact: <span style={{fontWeight:'bold'}}>+91-9212340202</span></p>
            <div className="social">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5eP7WvsDkOVPrkYxGVXsLku-BB9Rqb2FGUEpHs8&s"/>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/>
            </div>
        </div>
    )
}
export default Socials;