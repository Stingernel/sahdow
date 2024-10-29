import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Shadow Garden</h2>
                <p className={styles.description}>
                    Discover the mysteries of the shadows and join the adventure.
                </p>
                <div className={styles.links}>
                    <a href="#home" className={styles.link}>Home</a>
                    <a href="#about" className={styles.link}>About</a>
                    <a href="#features" className={styles.link}>Features</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className={styles.icon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icon} />
                    </a>
                </div>
                <p className={styles.copyRight}>
                    &copy; {new Date().getFullYear()} Shadow Garden. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
