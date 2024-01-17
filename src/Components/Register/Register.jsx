import React from 'react'
import styles from './register.module.css'
import { useNavigate } from 'react-router-dom'

function Register() {
  let navigate = useNavigate()
  return (
    <div className={styles.registerContainer}>
      <p>Choose your role!</p>
      <div className={styles.buttons}>
        <button className={styles.freelancerButton} onClick={() => navigate('/freelancer-signup')}>Freelancer</button>
        <button className={styles.clientButton} onClick={() => navigate('/client-signup')}>Client</button>
      </div>
    </div>
  )
}

export default Register