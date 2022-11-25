import React from 'react';
import About from './About';
import Photos from './Photos';
import Design from './Design';
import Contact from './Contact';

function Nav() {
    return(
        <header>
            <h1>Liv's Custom Candles</h1>
            <nav>
                <About></About>
                <Photos></Photos>
                <Design></Design>
                <Contact></Contact>
            </nav>
        </header>
    );
};

export default Nav;