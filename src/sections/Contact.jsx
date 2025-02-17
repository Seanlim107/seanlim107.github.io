import React from 'react';
import '../mystyle.css';

const Contact = () => {
    return (
        <section id="contact" class="contact">
        <h2>Get in Touch</h2>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" class="btn">Send Message</button>
        </form>
        </section>
    );
};

export default Contact;