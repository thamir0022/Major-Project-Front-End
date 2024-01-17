import React from 'react'
import styles from './footer.module.css'

function Footer() {
    return (
        <div className="">
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.footerCol}>
                            <h4>company</h4>
                            <ul>
                                <li><p className={styles.link}>about us</p></li>
                                <li><p className={styles.link}>our services</p></li>
                                <li><p className={styles.link}>privacy policy</p></li>
                                <li><p className={styles.link}>affiliate program</p></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>get help</h4>
                            <ul>
                                <li><p className={styles.link}>FAQ</p></li>
                                <li><p className={styles.link}>shipping</p></li>
                                <li><p className={styles.link}>returns</p></li>
                                <li><p className={styles.link}>order status</p></li>
                                <li><p className={styles.link}>payment options</p></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>online shop</h4>
                            <ul>
                                <li><p className={styles.link}>watch</p></li>
                                <li><p className={styles.link}>bag</p></li>
                                <li><p className={styles.link}>shoes</p></li>
                                <li><p className={styles.link}>dress</p></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>follow us</h4>
                            <div className="socialLinks">
                                <p className={styles.link}><i className="fab faFacebookF"></i></p>
                                <p className={styles.link}><i className="fab faTwitter"></i></p>
                                <p className={styles.link}><i className="fab faInstagram"></i></p>
                                <p className={styles.link}><i className="fab faLinkedinIn"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer