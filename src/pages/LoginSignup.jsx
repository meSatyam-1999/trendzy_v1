import React from 'react'
import './CSS/LoginSignup.css'
import Footer from '../components/Footer/Footer'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
          <h1>Sign Up</h1>
          <div className='login-signup-fields'>
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Mobile Number' />
              <input type='email' placeholder='Your E-mail id' />
              <input type='password' placeholder='Set Password' />
          </div>
          <button>Continue</button>
          <p className='login-signup-login'>Already have an account? <span>Login Here</span></p>
          <div className='login-signup-agree'>
              <input type='checkbox' name='' id='' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
      </div>
      
      <Footer />
    </div>
  
  )
}

export default LoginSignup