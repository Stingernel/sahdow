// src/components/About.js
import React from 'react';
import styles from '../styles/About.module.css';

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.content}>
                <img src="/images/about.webp" alt="Shadow Symbol" className={styles.image} />
                <div className={styles.text}>
                    <h2 className={styles.heading}>About the Shadow Garden</h2>
                    <p className={styles.paragraph}>We are an underground organization dedicated to mastering the arts of shadow and mystery.</p> {/* Menambahkan kelas pada p */}
                </div>
            </div>
        </section>
    );
}

export default About;
