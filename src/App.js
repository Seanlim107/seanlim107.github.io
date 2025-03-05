
import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
// import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './mystyle.css';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            
            <Footer />
        </div>
    );
}

export default App;