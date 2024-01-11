import React from 'react'
import './hero.css'
import backgroundVideo from './Accets/Videos/video.mp4'

function Hero() {
    return (
        <div className="hero-container">
            <div className='hero-content'>
                <h4 className='hero-title'>Recruit top freelancers for any job online.</h4>
                <video className='background-video' src={backgroundVideo} autoPlay loop muted></video>
                <div className="search-bar-container">
                    <input className='search-bar' type="text" placeholder='What are you looking for?' />
                    <div class="paste-button">
                        <button class="button">Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                        </svg></button>
                        <div class="dropdown-content">
                            <a id="top" href="#">Web Devoloper</a>
                            <a id="middle" href="#">UI UX Designer</a>
                            <a id="middle" href="#">Frond End Devoloper</a>
                            <a id="middle" href="#">Back End Devoloper</a>
                            <a id="middle" href="#">AI Engineer</a>
                            <a id="middle" href="#">ML Engineer</a>
                            <a id="bottom" href="#">Mobile App Devoloper</a>
                            <a id="middle" href="#">Graphics Designer</a>
                            <a id="middle" href="#">Digital Marketing</a>
                            <a id="middle" href="#">Video And Animation</a>
                            <a id="middle" href="#">Writing And Translation</a>
                            <a id="middle" href="#">Music And Audio</a>
                        </div>
                    </div>
                    <button className='search-button' type='submit'>Search</button>
                </div>
                <div className="hero-buttons">
                    <button>Find Skill</button>
                    <button>Find Work</button>
                </div>
            </div>
        </div>
    )
}

export default Hero