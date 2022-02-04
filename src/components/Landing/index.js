import React, { Component } from 'react';

import Navbar from './Navbar/index';
import Biography from './Biography/index';
import Services from './Services/index';
import Portfolio from './Portfolio/index';
import Contact from './Contact';

import './index.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div id="Landing">
                <Navbar/>
                <Biography />
                <Services />
                <Portfolio />
                <Contact />
                <footer>
                    
                </footer>
            </div>
        );
    }
}