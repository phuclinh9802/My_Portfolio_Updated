import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import css file for styling
import './index.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <span id="title">
                <Link to="/">Phillip</Link>
            </span>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    );
}