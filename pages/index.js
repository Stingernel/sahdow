// src/pages/index.js
import React from 'react';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Features from '../src/components/Features';
import Footer from '../src/components/Footer';

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Features />
            <Footer />
        </div>
    );
}
