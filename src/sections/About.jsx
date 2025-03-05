import React from 'react';
import '../mystyle.css';
import profilePicture from '../assets/pfp.jpeg'; // Import your profile picture
import resume from '../assets/Resume_SeanLim.pdf'; // Import your resume
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" class="about">
        <h2>About Me</h2>
        <div className="about"> 
        <div className="profile-picture">
                <img src={profilePicture} alt="Profile" />
            </div>
        <p>Hi! I'm an AI developer looking to make my mark on the technology industry with my expertise in AI architecture and computer vision. I also have previous backgrounds in robotics, electronics and circuitry if needed!</p>
        <p>Skills:</p>
        <div class="skills">
            <span>Python</span>
            <span>AI</span>
            <span>Pytorch</span>
            <span>Computer Vision</span>
        </div>

        <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/sean-lim-85bab1211/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/Seanlim107"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={24} />
                </a>
                <a href={resume} download="Resume_SeanLim.pdf">
                    <FaFilePdf size={24} />
                </a>
            </div>
        </div>
        </section>
        
    );
};

export default About;