import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container'>
            <div className="header">
                <div className="text">Sign up</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='First name' />
                </div>
                <div className="input">
                    <input type="text" placeholder='Last name' />
                </div>
                <div className="input">
                    <input type="password" placeholder='create password' />
                </div>
                <div className="input">
                    <input type="password" placeholder='Retype Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
  )
}

export default Signup;