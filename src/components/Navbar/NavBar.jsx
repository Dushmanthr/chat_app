import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <span className="logo">donCreations</span>
        <div className="user">
            <img src="" alt="" />
            <span>John</span>
            <button>logout</button>
        </div>
    </div> 
  )
}

export default NavBar
