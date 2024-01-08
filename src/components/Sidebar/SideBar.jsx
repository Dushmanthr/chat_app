import React from 'react'
import './sidebar.css'
import NavBar from '../Navbar/NavBar'
import Search from '../Search/Search'
import Chat_com from '../Chat_com/Chat_com'

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavBar/>
      <Search/>
      <Chat_com/>
    </div>
  )
}

export default SideBar
