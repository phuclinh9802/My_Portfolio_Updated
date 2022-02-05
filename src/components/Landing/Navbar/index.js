import React, { Component, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

// import css file for styling
import './index.css';

export default function Navbar() {

    const [isClicked, setisClicked] = useState(false);
    const [display, setDisplay] = useState('none');
    // const myLinks = useRef(null);

    var link = document.getElementById('my-links');
    // let cssProp = {};
    // cssProp['--display-block'] = "block";

    // myLinks.current;

    // if (isClicked) {
    //     // setDisplay('block')
    //     this.ref
        
    // }
    // else {
    //     // link.style.display = "none";
    // }

    
    
    return (
        <div id="navbar">
            <div class="topnav">
            <span id="title">
                <HashLink smooth to="#Biography">Phillip</HashLink>
            </span>
            <span id="my-links">
                <span class="hashlink">
                    <HashLink smooth to="#Biography">Home</HashLink>

                </span>
                <span class="hashlink">
                    <HashLink smooth to="#Services">Services</HashLink>
                </span>
                <span class="hashlink">
                    <HashLink smooth to="#Portfolio">Portfolio</HashLink>
                </span>
                <span class="hashlink">
                    <HashLink smooth to="#Contact">Contact</HashLink>
                </span>
                
            </span>
            <a id="icon"  onClick={() => setisClicked(!isClicked)}>
                <FontAwesomeIcon color="#333" icon={faBars} size="2x"/>
            </a>
            </div>
            
            
            
        </div>
    );
}