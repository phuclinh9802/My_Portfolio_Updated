import React, { Component, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

// import css file for styling
import './index.css';

export default function Navbar() {

    const [isClicked, setisClicked] = useState(false);
    
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

            <style jsx>
                {`
                    
                    #icon {
                        display: none;
                    }

                    @media screen and (max-width: 600px) {
                        #navbar .topnav {
                            display: ${isClicked ? 'grid': 'flex'};
                            grid-gap: 30px;
                            grid-template-columns: 1fr 3fr 1fr;
                            padding: 10px;
                            transition: height 0.5s linear;
                        }
                        #navbar #my-links {
                            display: ${isClicked ? 'flex': 'none'};
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 40vh;
                            width: 50vw;
                            position: relative;
                        }

                        .hashlink {
                            margin: 20px;
                        }
                        #icon {
                            display: inline;
                            z-index: 100;
                            align-self: flex-start;
                            text-align: center;
                        }

                        #title {
                            
                        }
                    }
                `}
            </style>
            
            
            
        </div>
    );
}

