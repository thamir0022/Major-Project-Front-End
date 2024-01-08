import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

function Register() {
let navigate = useNavigate()
  return (
    <div className="register-container">
        <p>Choose your role!</p>
        <div className="buttons">
            <button className='freelancer-button' onClick={()=>navigate('/freelancer-signup')}>Freelancer</button>
            <button className='client-button' onClick={()=>navigate('/client-signup')}>Client</button>
        </div>
    </div>
  )
}

export default Register