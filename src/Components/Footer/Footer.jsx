import React from 'react'
import styles from './footer.module.css'

function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <h5>Home</h5>
                    <p>Hai</p>
                    <p>Hello</p>
                    <p>World</p>
                </div>
                <div>
                    <h5>About Us</h5>
                    <p>Hai</p>
                    <p>Hello</p>
                    <p>World</p>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <p>Hai</p>
                    <p>Hello</p>    
                    <p>World</p>
                </div>
                <div>
                    <h5>Reach Us</h5>
                    <p>Hai</p>
                    <p>Hello</p>
                    <p>World</p>
                </div>
                <div className={styles.sendUs}>
                    <h6>Subscribe to our newsletter</h6>
                    <div className={styles.emailContainer}>
                        <input type="text" placeholder='Email Address'/>
                        <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer