import React, { useState } from 'react'
import './Login.css'
import {login,signup} from '../../fire_base'
import netflix_spinner from  '../../Assests/netflix_spinner.gif'


const  Login =()=> {
    const [switchForm,setSwitchForm] = useState("Sign In")
    const [loading,setLoading] = useState(false)
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange =(event)=>{
        const {name,value}=event.target
        setInput((prev)=>{return {...prev,[name]:value}})
    }
    const submitForm = async (event)=>{
        event.preventDefault();
        setLoading(true)
        if(switchForm === "Sign In"){
            await login(input.email,input.password)
        }
        else{
            await signup(input.name,input.email,input.password)
        }
        setLoading(false)
    }
  return (
    loading?<div className="loading_spinner">
        <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
        <div className="contents">
        <form onSubmit={submitForm}>
            <h3>{switchForm}</h3>
            {
                switchForm === "Sign Up" ?
                <input type="text" placeholder='Name' name='name' onChange={handleChange} />:
                <></>
            }
            <input  onChange={handleChange} type="email" placeholder='Email' name='email' />
            <input  onChange={handleChange} type="password" placeholder='Password' name='password' />
            <button type='submit'>{switchForm}</button>
        </form>
        <div className="login-content">
            <div className="remember">
                <input type="checkbox" id='remember' />
                <label htmlFor="remember">Remember Me?</label>
            </div>
            <div className="form-switch">
                {
                    switchForm === "Sign In"?
                    <p>New to Netflix? <span onClick={()=>{setSwitchForm("Sign Up")}}> Sign Up Now</span></p>:
                <p>Already Have Account? <span onClick={()=>{setSwitchForm("Sign In")}}> Sign In</span></p>
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login