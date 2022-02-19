import React, { Component } from 'react';

import Navbar from './Navbar/index';
import Biography from './Biography/index';
import Services from './Services/index';
import Portfolio from './Portfolio/index';
import Contact from './Contact';

import './index.css';

import AnimatedPage from '../AnimatedPage';

export default class Landing extends React.Component {
    render() {
        return (
            <AnimatedPage>
                <div id="Landing">
                    <Biography />
                    <Services />
                    {/* <Portfolio /> */}

                    <Contact />
                    <footer>
                        Copyright &copy; 2022 by Phillip Nguyen. All Rights Reserved.
                    </footer>


                </div>
            </AnimatedPage>


        );
    }
}