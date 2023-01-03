import '../Navbar/Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='navrootdiv'>
                <div style={{ width: '100px', cursor: 'pointer' }}>
                    <img src='https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png' className='navLogo' alt='navlogo' />
                </div>
                <div className='navDropMenu'>

                    <select className='navdropdown'>
                        <option value="del">Delhi</option>
                        <option value="mum">Mumbai</option>
                        <option value="kol">Kolkata</option>
                        <option value="goa">Goa</option>
                    </select>
                </div>
                <div className='navAnchor'>

                </div>
                <div className='profileLink'>
                    <div className='profilePic'>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;