import React, { Component } from 'react';

import Navbar from './Navbar/index';
import Biography from './Biography/index';

import './index.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div id="Landing">
                <Navbar/>
                <Biography />
                {/* <Services />
                <Portfolio />
                <Contact /> */}
                <footer>
                    
                </footer>
            </div>
        );
    }
}