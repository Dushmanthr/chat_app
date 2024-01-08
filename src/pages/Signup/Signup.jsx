import React from 'react'
import './signup.css'
import { LuImagePlus } from "react-icons/lu";

const Signup = () => {
  return (
    <div className="signup">
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">DonCreations</span>
                <span className="title">Sign Up</span>
               <form action="">
                    <input type="text" placeholder='Display Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file" className="img_icon"><LuImagePlus />
                    <span className='avatar_text'>Add an avatar</span>
                    </label>
                    <button className="signup_btn">Sign Up</button>
                </form> 
                <p>You have an account? Login</p>
            </div>
        </div>
    </div>
  )
}

export default Signup
