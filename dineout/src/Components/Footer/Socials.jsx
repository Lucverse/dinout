import { NavLink } from "react-router-dom";
function Socials() {
    return (
        <div>
            <NavLink to='/'>
                <img src='https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png' className='navLogo' alt='navlogo' />
            </NavLink>
            <p style={{fontSize:'13px'}}>Find the best Restaurants, Deals, Discounts & Offers</p>
            <p>Contact: <span style={{fontWeight:'bold', fontSize:'15px'}}>+91-9212340202</span></p>
            <div className="social">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5eP7WvsDkOVPrkYxGVXsLku-BB9Rqb2FGUEpHs8&s" alt="youtube"/>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png" alt="facebook"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="twitter"/>
            </div>
            <p style={{marginBottom:'50px', fontSize:'12px'}}>© 2017, dineout.co.in. All Rights Reserved.</p>
        </div>
    )
}
export default Socials;