import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className="signin">
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">DonCreations</span>
                <span className="title">Login</span>
               <form action="">
                   
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    
                    <button className="signin_btn">Login</button>
                </form> 
                <p>You don't have an account? Signup</p>
            </div>
        </div>
    </div>
  )
}

export default Login
