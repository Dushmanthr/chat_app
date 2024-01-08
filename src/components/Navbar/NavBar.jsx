import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <span className="logo">donCreations</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div> 
  )
}

export default NavBar
