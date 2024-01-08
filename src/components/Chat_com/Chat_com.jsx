import React from 'react'
import './chat_com.css'
import Chat_card from '../Chat_card/Chat_card'

const Chat_com = () => {
  return (
    <div className="chat_com">
         <Chat_card/>
         <Chat_card/>
         <Chat_card/>
    </div>
  )
}

export default Chat_com
