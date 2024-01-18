import React, { useState } from 'react';
import styles from './login.module.css';
import axios from '../../Axios/axios';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../../Images/work-wave-logo.png';

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
          setError('An error occurred !');
        }
      });
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <img className={styles.logo} src={companyLogo} onClick={()=>navigate('/')} alt="" />
        <h4 className={styles.title}>Welcome back</h4>
        <input
          className={styles.userName}
          type="text"
          name='userName'
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          className={styles.password}
          type="password"
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className={styles.forgotPass}>Forgot Password?</p>
        <button className={styles.submitButton} type='submit'>Login</button>
        <p className={styles.dontHaveAnAcc}>Don't have an account? <span className={styles.login} onClick={()=>navigate('/register')}>Signup</span></p>
        <p style={{ display: error ? 'block' : 'none' }} className= {error ? styles.errMsg : ''}>{error}</p>
      </form>
    </div>
  );
}

export default Login;
