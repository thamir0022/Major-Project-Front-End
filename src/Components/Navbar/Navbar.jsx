import React from 'react'
import styles from './navbar.module.css'
// import logo from '../../Images/work-wave-logo.png'
// import { useNavigate } from 'react-router-dom'
function Navbar() {
  return (
    <nav id={`${styles.menu}`}>
      <div className={`${styles['menu-item']}`}>
        <div className={`${styles['menu-text']}`}>
          <p>Products</p>
        </div>
        <div className={`${styles['sub-menu']}`}>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-wind-turbine']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Turbo Editor <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-lightbulb-on']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Idea Creator <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-bomb']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Super Collider <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Remove mass from any object.</div>
            </div>
          </div>
          <div className={`${styles['sub-menu-holder']}`}></div>
        </div>
      </div>
      <div className={`${styles['menu-item']} ${styles['highlight']}`}>
        <div className={`${styles['menu-text']}`}>
          <p>Services</p>
        </div>
        <div className={`${styles['sub-menu']} ${styles['double']}`}>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['a']}`}>
            <div className={`${styles['icon']} ${styles['far fa-question-circle']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Consult <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>From Professionals</div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['b']}`}>
            <div className={`${styles['icon']} ${styles['far fa-users-className']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Teach <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>In classNameroom</div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['c']}`}>
            <div className={`${styles['icon']} ${styles['far fa-school']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Learn <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>By Video</div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['d']}`}>
            <div className={`${styles['icon']} ${styles['far fa-chess-rook']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Keep <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>The Castle</div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['e']}`}>
            <div className={`${styles['icon']} ${styles['far fa-video-plus']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Become <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>A Creator</div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['gb']} ${styles['f']}`}>
            <div className={`${styles['icon']} ${styles['far fa-cat']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Understand <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Our Journey</div>
            </div>
          </div>
          <div className={`${styles['bottom-container']}`}>
            Ready to dive in? <p>Get Started</p>
          </div>
          <div className={`${styles['sub-menu-holder']}`}></div>
        </div>
      </div>
      <div className={`${styles['menu-item']} ${styles['highlight']}`}>
        <div className={`${styles['menu-text']}`}>
          <p>Support</p>
        </div>
        <div className={`${styles['sub-menu']} ${styles['triple']}`}>
          <div className={`${styles['top-container']} ${styles['gb']} ${styles['c']} ${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['big']} ${styles['far fa-book']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Where to start</div>
              <div className={`${styles['sub-text']}`}>Find out where to begin below</div>
            </div>
          </div>
          <div className={`${styles['box']}`}>
            <h3>Your Journey</h3>
            <p>Get Started</p>
            <p>Learn the Basics</p>
            <p>Get Advanced</p>
            <p>Start Teaching</p>
          </div>
          <div className={`${styles['box']}`}>
            <h3>Your Tools</h3>
            <p>Turbo Editor</p>
            <p>Time Stopper</p>
            <p>Brain Enhancer</p>
            <p>Network Maker</p>
          </div>
          <div className={`${styles['icon-box']} ${styles['flat']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-plug']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>API Guide <i className={`${styles['far fa-arrow-right']}`}></i></div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['flat']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-comments']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Support Line <i className={`${styles['far fa-arrow-right']}`}></i></div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['flat']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-phone-volume']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Live Chat <i className={`${styles['far fa-arrow-right']}`}></i></div>
            </div>
          </div>
          <div className={`${styles['icon-box']} ${styles['flat']}`}>
            <div className={`${styles['icon']} ${styles['fal fa-book-spells']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Documentation <i className={`${styles['far fa-arrow-right']}`}></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['menu-item']}`}>
        <div className={`${styles['menu-text']}`}>
          <p>Community</p>
        </div>
        <div className={`${styles['sub-menu']}`}>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['far fa-satellite']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Forum <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Join our passionate community.</div>
            </div>
          </div>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['fab fa-twitter-square']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Twitter <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>Follow us on twitter.</div>
            </div>
          </div>
          <div className={`${styles['icon-box']}`}>
            <div className={`${styles['icon']} ${styles['fab fa-twitch']}`}></div>
            <div className={`${styles['text']}`}>
              <div className={`${styles['title']}`}>Live Stream <i className={`${styles['far fa-arrow-right']}`}></i></div>
              <div className={`${styles['sub-text']}`}>We stream content every day.</div>
            </div>
          </div>
          <div className={`${styles['sub-menu-holder']}`}></div>
        </div>
      </div>
      <div id={`${styles['sub-menu-container']}`}>
        <div id={`${styles['sub-menu-holder']}`}>
          <div id={`${styles['sub-menu-bottom']}`}>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar