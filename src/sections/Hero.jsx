import React from 'react';
import '../mystyle.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div>
                <h2>Welcome to Sean Lim's website</h2>
                <p>Innovating one step at a time.</p>
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;