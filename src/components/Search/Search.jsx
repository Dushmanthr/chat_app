import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userChatInfo">
            <span>Jonny</span>
        </div>
      </div>
    </div>
  )
}

export default Search
