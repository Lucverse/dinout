import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar({setLogin}) {
  return (
    <div>

        <div id="navbar">
           <Link to="/"><img id='logoimage' src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" alt="Logo" /></Link>
           <select name="" id="selectbox"></select>
            <button onClick={() => setLogin((p) => !p)} id="loginbtn">Login</button>
            <Link><h3>Home</h3></Link>
        </div>

    </div>
  )
}
