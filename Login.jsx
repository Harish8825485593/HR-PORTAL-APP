import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
            <div className="header">
                <div className="text">Login</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='User_Name' />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
  )
}

export default Login