import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import css file for styling
import './index.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <span id="title">
                <HashLink smooth to="#Biography">Phillip</HashLink>
            </span>
            <HashLink smooth to="#Biography">Home</HashLink>
            <HashLink smooth to="#Services">Services</HashLink>
            <HashLink smooth to="#Portfolio">Portfolio</HashLink>
            <HashLink smooth to="#Contact">Contact</HashLink>
            {/* <Link to="/contact">Contact</Link> */}
        </div>
    );
}