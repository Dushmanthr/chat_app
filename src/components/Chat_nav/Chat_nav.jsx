import React from 'react'
import './chat_nav.css'
import Cam from '../../assets/Img/cam.png'
import Add from '../../assets/Img/add.png'
import More from '../../assets/Img/more.png'

const Chat_nav = () => {
  return (
    <div className="chat_nav">
        <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Chat_nav
