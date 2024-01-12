import React from 'react'
import backgroundImage from './Images/bg.jpg'
import './section.css'
import { useNavigate } from 'react-router-dom'

function AdvSection() {
  let navigate = useNavigate()
  return (
    <div className="section-container">
      <img className='background-img' src={backgroundImage} alt="" />
      <div className="content">
        <div className="text">
          <h3>Find the talent needed to get your business growing.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button onClick={()=>navigate('/register')}>Get Started</button>
        </div>
      </div>
      <div className="containers">
        <div className="section-1">
          <div className="block block-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
          </div>
          <div className="block block-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
            </svg>
          </div>
        </div>
        <div className="section-2">
          <div className="block block-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvSection