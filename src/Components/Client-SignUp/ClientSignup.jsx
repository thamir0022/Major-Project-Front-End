import React, { useState } from 'react'
import './clientSignup.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../Axios/axios'

function ClientSignup() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [conformPassword, setConformPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
      password2: conformPassword
    }


    // Make a POST request using Axios
    axios.post('/auth/client-register/', formData)
      .then(response => {
        console.log('Response:', response);
        if(response.status === 201){
          navigate('/register')
        }
        // Handle success, e.g., redirect to a new page
      })
      .catch(error => {
        console.error('Error making POST request:', error);
        // Handle error, e.g., show an error message to the user
        if (error.status === 400){
          console.log('ERROR : ', error.response);
        }else if (error.response && error.response.status === 401) {
          setError('An error occurred');
        }

      });

  }

  return (
    <div className="signup-container">
      <div className="form-input">
        <h3 className='tag'>Create Your Account</h3>
        <form action="" onSubmit={handleSubmit}>
          <input className='inputs' type="text" name='first-name' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          <input className='inputs' type="text" name='last-name' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}required />
          <input className='inputs' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input className='inputs' type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input className='inputs' type="password" name='conform-password' placeholder='Confirm password' value={conformPassword} onChange={(e) => setConformPassword(e.target.value)} required/>
          <p style={{ display: error ? 'block' : 'none' }} className= {error ? 'err-msg' : ''}>{error}</p>
          <p className='pass-err'>Password must be at least 6 characters.</p>
          <button type='submit'>Register</button>
        </form>
        <p className='have-an-acc'>Already have an account!?<span onClick={() => navigate('/login')} className='login'>Login</span></p>
      </div>
    </div>
  )
}

export default ClientSignup