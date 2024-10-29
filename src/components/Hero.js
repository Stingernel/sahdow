// src/components/Hero.js
import React from 'react';
import styles from '../styles/Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to the Shadow Garden</h1>
                <p className={styles.description}>Discover the hidden mysteries and secrets of the Shadow Realm.</p>
                <button className={styles.button}>Join the Darkness</button>
            </div>
        </section>
    );
}

export default Hero;
