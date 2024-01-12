import React, { useState } from 'react'
import './hero.css'
import backgroundVideo from './Accets/Videos/video.mp4'

function Hero() {
    const [search, setSearch] = useState('')
    const [role, setRole] = useState('')
    const [location, setLocation] = useState('')
    const handleMouseEnter = (value, type) => {
        if (type === 'role') {
          setRole(value);
        } else if (type === 'location') {
          setLocation(value);
        }
        setSearch(`${role} @ ${location}`);
      };
    
    return (
        <div className="hero-container">
            <div className='hero-content'>
                <h4 className='hero-title'>Recruit top freelancers for any job online.</h4>
                <video className='background-video' src={backgroundVideo} autoPlay loop muted></video>
                <div className="search-bar-container">
                    <input className='search-bar' value={search} type="text" placeholder='What are you looking for?' />
                    <div class="paste-button">
                        <button class="button">Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                        </svg></button>
                        <div class="dropdown-content">
                            <input type="text" placeholder="Search Job"/>   
                            <button className="top"  onMouseEnter={() => handleMouseEnter('Web Developer', 'role')}>Web Devoloper</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('UI UX Designer', 'role')}>UI UX Designer</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Frond End Devoloper', 'role')}>Frond End Devoloper</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Back End Devoloper', 'role')}>Back End Devoloper</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('AI Engineer', 'role')}>AI Engineer</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('ML Engineer', 'role')}>ML Engineer</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Mobile App Devoloper', 'role')}>Mobile App Devoloper</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Graphics Designer', 'role')}>Graphics Designer</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Digital Marketing', 'role')}>Digital Marketing</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Video And Animation', 'role')}>Video And Animation</button>
                            <button className="middle"  onMouseEnter={() => handleMouseEnter('Writing And Translation', 'role')}>Writing And Translation</button>
                            <button className="bottom"  onMouseEnter={() => handleMouseEnter('Music And Audio', 'role')}>Music And Audio</button>
                        </div>
                    </div>
                    <div class="paste-button">
                        <button class="button">Location <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                        </svg></button>
                        <div class="dropdown-content">
                            <input type="text" placeholder="Search location"/>
                            <button className="top" onMouseEnter={() => handleMouseEnter('Bangalore', 'location')}>Bangalore</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Chennai', 'location')}>Chennai</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Pune', 'location')}>Pune</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Kochi', 'location')}>Kochi</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Trivantrum', 'location')}>Trivandrum</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Coimbatore', 'location')}>Coimbatore</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Kozhikkode', 'location')}>Kozhikkode</button>
                            <button className="middle" onMouseEnter={() => handleMouseEnter('Mumbai', 'location')}>Mumbai</button>
                            <button className="bottom" onMouseEnter={() => handleMouseEnter('Delhi', 'location')}>Delhi</button>
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