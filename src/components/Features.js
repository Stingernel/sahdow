import React from 'react';
import styles from '../styles/Features.module.css';

function Features() {
    const featureList = [
        {
            title: "Mystic Shadows",
            description: "Explore the unseen realms where shadows dwell.",
            image: "/images/f1.jpg",
        },
        {
            title: "Enchanted Weapons",
            description: "Harness the power of ancient weapons infused with magic.",
            image: "/images/f2.jpg",
        },
        {
            title: "Shadow Guardians",
            description: "Join forces with guardians who protect the secrets of the shadows.",
            image: "/images/f3.jpg",
        },
    ];

    return (
        <section className={styles.features}>
            <h2 className={styles.heading}>Features</h2>
            <div className={styles.featureList}>
                {featureList.map((feature, index) => (
                    <div className={`${styles.feature} ${index === 1 ? styles.special : ''}`} key={index}>
                        <img src={feature.image} alt={feature.title} className={styles.image} />
                        <h3 className={styles.title}>{feature.title}</h3>
                        <p className={styles.description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
