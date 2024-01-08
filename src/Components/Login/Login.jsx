import React, { useState } from 'react';
import './login.css';
import axios from '../../Axios/axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      email: userName,
      password: password
    };

    // Make a POST request using Axios
    axios.post('/auth/login/', formData)
      .then(response => {
        console.log('Response:', response);
        // Handle success, e.g., redirect to a new page
      })
      .catch(error => {
        console.error('Error making POST request:', error);
        // Handle error, e.g., show an error message to the user
        if (error.response && error.response.status === 401) {
          setError('Invalid username or password!');
        } else {
          setError('An error occurred');
        }
      });
  };

  return (
    <div className="login-container">
      <form className='login' onSubmit={handleSubmit}>
        <h4 className='title' style={{color: 'black', fontSize: '25px'}}>Welcome back</h4>
        <input
          className='user-name'
          type="text"
          name='userName'
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          className='password'
          type="password"
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p style={{ display: error ? 'block' : 'none' }} className= {error ? 'err-msg' : ''}>{error}</p>
        <button className='submit-button' type='submit'>Login</button>
        <p style={{color: 'black', fontFamily: 'sans-serif'}}>Don't have an account? <span className='login' onClick={()=>navigate('/register')}>Signup</span></p>
      </form>
    </div>
  );
}

export default Login;
