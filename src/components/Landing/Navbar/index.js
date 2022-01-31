import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import css file for styling
import './index.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <span id="title">
                <Link to="/">Phillip</Link>
            </span>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}