import React from 'react'
import styles from './hero.module.css'
import backgroundVideo from './Accets/Videos/video1.mp4'

function Hero() {

    return (
        <main>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h4 className={styles.heroTitle}>Recruit top freelancers for any job online.</h4>
                    <video className={styles.backgroundVideo} src={backgroundVideo} autoPlay loop muted></video>
                    <div className={styles.searchBarContainer}>
                        <input className={styles.searchBar} type="text" placeholder='What are you looking for?' />
                        <div className={styles.pasteButton}>
                            <button className={styles.button}>Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                            </svg></button>
                            <div className={styles.dropdownContent}>
                                <input className={styles.smallSearchBar} type="text" placeholder="Search Any Job" />
                                <p className={styles.top} >Web Devoloper</p>
                                <p className={styles.middle} >UI UX Designer</p>
                                <p className={styles.middle} >Frond End Devoloper</p>
                                <p className={styles.middle} >Back End Devoloper</p>
                                <p className={styles.middle} >AI Engineer</p>
                                <p className={styles.middle} >ML Engineer</p>
                                <p className={styles.middle} >Mobile App Devoloper</p>
                                <p className={styles.middle} >Graphics Designer</p>
                                <p className={styles.middle} >Digital Marketing</p>
                                <p className={styles.middle} >Video And Animation</p>
                                <p className={styles.middle} >Writing And Translation</p>
                                <p className={styles.bottom} >Music And Audio</p>
                            </div>
                        </div>
                        <div className={styles.pasteButton}>
                            <button className={styles.button}>Location <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                            </svg></button>
                            <div className={styles.dropdownContent}>
                                <input className={styles.smallSearchBar} type="text" placeholder="Search location" />
                                <p className={styles.top} >Bangalore</p>
                                <p className={styles.middle} >Chennai</p>
                                <p className={styles.middle} >Pune</p>
                                <p className={styles.middle} >Kochi</p>
                                <p className={styles.middle} >Trivandrum</p>
                                <p className={styles.middle} >Coimbatore</p>
                                <p className={styles.middle} >Kozhikkode</p>
                                <p className={styles.middle} >Mumbai</p>
                                <p className={styles.bottom} >Delhi</p>
                            </div>
                        </div>
                        <button className={styles.searchButton} type='submit'>Search</button>
                    </div>
                    <div className={styles.heroButtons}>
                        <button>Find Skill</button>
                        <button>Find Work</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero