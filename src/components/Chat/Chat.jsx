import React from 'react'
import './chat.css';
import Chat_nav from '../Chat_nav/Chat_nav';
import Messages_l from '../Messages_l/Messages_l';
import Input from '../Input/Input'

const Chat = () => {
  return (
    <div className='chat'>
        <Chat_nav/>
        <Messages_l/>
        <Input/>
    </div>
  )
}

export default Chat
