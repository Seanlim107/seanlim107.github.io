import React from 'react';
import '../mystyle.css';

const Contact = () => {
    return (
        <section id="contact" class="contact">
        <h2>Get in Touch</h2>
        <form>
            <input type="text" placeholder="Input your prompt here"/>
            <button type="submit" class="btn">Send</button>
        </form>
        </section>
    );
};

export default Contact;