import React, { useState } from 'react';
import './login.css';
import axios from '../../Axios/axios';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      email: userName,
      password: password
    };

    // Make a POST request using Axios
    axios.post('auth/freelance-login/', formData)
      .then(response => {
        console.log('Response:', response);
        // Handle success, e.g., redirect to a new page
      })
      .catch(error => {
        console.error('Error making POST request:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="login-container">
      <form className='login' onSubmit={handleSubmit}>
        <h4 className='title'>Welcome back</h4>
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
        <button className='submit-button' type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
