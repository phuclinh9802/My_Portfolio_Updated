import React, { Component } from 'react';

// import css file for styling
import './index.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <span id="title">
                <a href="#home">Phillip</a>
            </span>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    );
}