import React, { useState } from 'react'
import styles from './freelancerSignup.module.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../Axios/axios'
import companyLogo from '../../Images/work-wave-logo.png';
  
function FreelancerSignup() {
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
    axios.post('/auth/freelancer-register/', formData)
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
    <div className={styles.signupContainer}>
      <div className={styles.formInput}>
        <img className={styles.logo} src={companyLogo} onClick={()=>navigate('/')} alt="" />
        <h3 className={styles.tag}>Create Your Account</h3>
        <form action="" onSubmit={handleSubmit}>
          <input className={styles.inputs} type="text" name='first-name' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          <input className={styles.inputs} type="text" name='last-name' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}required />
          <input className={styles.inputs} type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input className={styles.inputs} type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input className={styles.inputs} type="password" name='conform-password' placeholder='Confirm password' value={conformPassword} onChange={(e) => setConformPassword(e.target.value)} required/>
          <p style={{ display: error ? 'block' : 'none' }} className= {error ? styles.errMsg : ''}>{error}</p>
          <p className={styles.passWarn}>Password must be at least 6 characters.</p>
          <button type='submit'>Register</button>
        </form>
        <p className={styles.haveAnAcc}>Already have an account!?<span onClick={() => navigate('/login')} className={styles.login}>Login</span></p>
        <hr style={{width: '80%', margin: 'auto'}}/>
        <p className={styles.socialLoginTitle}>SignUp With</p>
        <div className={styles.socialIcons}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>

        </div>
      </div>
    </div>
  )
}

export default FreelancerSignup