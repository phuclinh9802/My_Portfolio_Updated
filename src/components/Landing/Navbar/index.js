import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import css file for styling
import './index.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <span id="title">
                <HashLink smooth to="/">Phillip</HashLink>
            </span>
            <HashLink smooth to="/">Home</HashLink>
            <HashLink smooth to="#Services">Services</HashLink>
            <HashLink smooth to="#Portfolio">Portfolio</HashLink>
            {/* <Link to="/contact">Contact</Link> */}
        </div>
    );
}