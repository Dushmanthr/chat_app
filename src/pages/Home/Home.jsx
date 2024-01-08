import React from 'react'
import SideBar from '../../components/Sidebar/SideBar'
import Chat from '../../components/Chat/Chat'
import './home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <SideBar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home
