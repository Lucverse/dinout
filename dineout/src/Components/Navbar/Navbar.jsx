import '../Navbar/Navbar.css';
//import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
function Navbar() {
     
    return (
        <div className='navbar'>
            <div className='navrootdiv'>
                <div style={{ width: '100px', marginRight: '20px', cursor: 'pointer', marginTop:'3px'}}>
                    <NavLink to='/'>
                        <img src='https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png' className='navLogo' alt='navlogo' />
                    </NavLink>
                </div>
                <div className='navDropMenu'>
                    <img src='https://cdn-icons-png.flaticon.com/512/64/64665.png' />
                    <select className='navdropdown'>
                        <option value="del">Delhi</option>
                        <option value="mum">Mumbai</option>
                        <option value="kol">Kolkata</option>
                        <option value="goa">Goa</option>
                    </select>
                </div>
                <div className='navAnchor'>
                    <NavLink to='/' className='navlink'>Home</NavLink>
                    <NavLink to='/bookatable' className='navlink'>Book a Table</NavLink>
                    <NavLink to='/dineoutpay' className='navlink'>Dineout Pay</NavLink>
                    <NavLink to='/events' className='navlink'>Events</NavLink>
                    <NavLink to='/blog' className='navlink'>Blog</NavLink>
                </div>
                <div className='profileLink'>
                    <div className='profilePic'>
                        <p>US</p>
                    </div>

                    <div className='profileDrop'>
                        <p className='dropbtn'>My Account <i class="arrow down"></i></p>
                        <div className="dropdown-content">
                            <NavLink to='/Profile' className='navlink'>Profile</NavLink>
                            <NavLink to='/couponhistory' className='navlink'>Coupon History</NavLink>
                            <NavLink to='/logout' className='navlink'>Logout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;