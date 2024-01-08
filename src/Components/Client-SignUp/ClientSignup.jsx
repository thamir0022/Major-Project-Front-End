import React from 'react'
import './clientSignup.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../Axios/axios'

function ClientSignup() {
  let navigate = useNavigate()
  return (
    <div className="signup-container">
      <div className="form-input">
        <h3 className='tag'>Create Your Account</h3>
        <form action="">
          <input className='inputs' type="text" name='first-name' placeholder='First Name'required/>
          <input className='inputs' type="text" name='last-name' placeholder='Last Name'required/>
          <input className='inputs' type="email" name='email' placeholder='Email'required/>
          <input className='inputs' type="password" name='password' placeholder='Password' required/>
          <input className='inputs' type="password" name='conform-password' placeholder='Confirm password' required/>
          <button type='submit'>Register</button>
        </form>
        <p className='have-an-acc'>Already have an account!?<span onClick={()=>navigate('/login')} className='login'>Login</span></p>
      </div>
    </div>
  )
}

export default ClientSignup