import React from 'react'
import './Login.css'

const  Login =()=> {
  return (
    <div className='login'>
        <div className="contents">
        <form>
            <h3>Sign Up</h3>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Submit</button>
        </form>
        <div className="login-content">
            <div className="remember">
                <input type="checkbox" id='remember' />
                <label htmlFor="remember">Remember Me?</label>
            </div>
            <div className="form-switch">
                <p>New to Netflix? <span> Sign Up Now</span></p>
                <p>Already Have Account? <span> Sign In</span></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login