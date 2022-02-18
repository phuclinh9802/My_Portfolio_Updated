import React, { Component } from 'react';

import Navbar from './Navbar/index';
import Biography from './Biography/index';
import Services from './Services/index';
import Portfolio from './Portfolio/index';
import Contact from './Contact';

import { Routes, Route, BrowserRouter } from 'react-router-dom';


import CellCollective from '../Projects/CellCollective';
import AutomateExcel from '../Projects/AutomateExcel';
import Covid from '../Projects/Covid';

import './index.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div id="Landing">
                <Biography />
                <Services />
                {/* <Portfolio /> */}

                <Contact />
                <footer>
                    Copyright &copy; 2022 by Phillip Nguyen. All Rights Reserved.
                </footer>


            </div>


        );
    }
}