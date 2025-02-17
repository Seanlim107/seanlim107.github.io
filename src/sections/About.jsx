import React from 'react';
import '../mystyle.css';

const About = () => {
    return (
        <section id="about" class="about">
        <h2>About Me</h2>
        <p>Hi! I'm an AI developer looking to make my mark on the technology industry with my expertise in AI architecture and computer vision. I also have previous backgrounds in robotics, electronics and circuitry if needed!</p>
        <p>Skills:</p>
        <div class="skills">
            <span>Python</span>
            <span>AI</span>
            <span>Pytorch</span>
            <span>Computer Vision</span>
        </div>
        </section>
    );
};

export default About;