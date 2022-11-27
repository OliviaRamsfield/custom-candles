import React from 'react';
import aboutUs from '../assets/photos/aboutus.jpeg';

function About() {
    return(
        <section className='flex-container'>
            <div className='image'>
                <img id='about-us' src={aboutUs} alt="Candle"></img>
                <p>Something catchy here</p>
            </div>
            <div>
                <h1>Who are we?</h1>
                <p>placeholder text, placeholder text, placeholder text, placeholder text.</p>
            </div>
        </section>
    )
}

export default About;