import React, { Component, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

import { Spin as Hamburger } from 'hamburger-react';

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
            <div id="icon">
                {/* <FontAwesomeIcon color="#333" icon={faBars} size="2x"/> */}
                <Hamburger 
                    toggled={isClicked} 
                    toggle={setisClicked}
                    duration={0.5}    
                />

            </div>
            </div>

            <style jsx>
                {`
                    #icon {
                        display: none;
                    }

                    @media screen and (max-width: 600px) {
                        #navbar {
                            padding: 10px;
                        }
                        #navbar .topnav {
                            display: ${isClicked ? 'grid': 'flex'};
                            grid-gap: 30px;
                            grid-template-columns: 1fr 3fr 1fr;
                            transition: height 0.5s linear;
                        }
                        #navbar #my-links {
                            display: ${isClicked ? 'flex': 'none'};
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;
                            height: 40vh;
                            width: 50vw;
                            position: relative;
                        }

                        .hashlink {
                            margin: 20px;
                            border-bottom: 1px dashed #333;
                        }
                        #icon {
                            display: inline;
                            z-index: 100;
                            align-self: flex-start;
                            text-align: center;
                            padding-left: 20px;
                        }

                        #navbar a:hover {
                            color: #777;
        
                        }
                    }
                    @media screen and (max-width: 500px) {
                        #title a{
                            display: ${isClicked ? 'none': 'inline'};
                        }

                        #navbar .topnav {
                            grid-template-columns:  1fr 2fr 1fr;
                            transition: height 0.5s linear;
                        }
                    }

                `}
            </style>
            
            
            
        </div>
    );
}

