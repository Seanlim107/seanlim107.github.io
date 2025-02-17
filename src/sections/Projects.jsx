import React from 'react';
import '../mystyle.css';
import valid5 from '../assets/valid5.png';
import Chatbot_Results from '../assets/Chatbot_Results.png';
import PALMS_UI from '../assets/PALMS_UI.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: valid5, // Use imported image
            title: "Construction Site Object Detector",
            description: "A project I did under AITIS where I detected workers and possible hazards in a construction site and send alerts if they are too close to each other.",
            link: "https://github.com/Seanlim107/Internship-Project-2024"
        },
        {
            id: 2,
            image: Chatbot_Results, // Use imported image
            title: "Chatbot with Sentimental Analysis",
            description: "A chatbot that sends responses that matches the users' sentiment when inputting a message.",
            link: "https://github.com/Seanlim107/Sentimental-Chatbot"
        },
        {
            id: 3,
            image: PALMS_UI, // Use imported image
            title: "Pavlovian Associative Learning Models Simulator",
            description: "A simulator for current known associative learning models for Pavlovian learning, fully equipped with various functionalities with priorities on universality and user-friendliness.",
            link: "https://github.com/mfixman/rw-model"
        },
    ];
    return (
        <section id="projects" className="projects">
            <h2>Random Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="btn">View Project</a>
                    </div>
                ))}
            </div>
        </section>
        );
    };

export default Projects;