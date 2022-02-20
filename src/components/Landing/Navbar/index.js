import React, { Component, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Spin as Hamburger } from 'hamburger-react';

// import css file for styling
import './index.css';

export default function Navbar() {

    const [isClicked, setisClicked] = useState(false);

    const [portfolioClicked, setClicked] = useState(false);

    // console.log(portfolioClicked)
    let serv = document.querySelector(".services")
    let cont = document.querySelector(".contact")

    // perform side effects in function components
    useEffect(() => {
        // if true, then we are in portfolio mode
        // if (serv == null && cont == null) {
        //     return;
        // }

        // check if services and contact querySelector exist
        if (serv && cont) {
            if (portfolioClicked) {
                // display none for Services and Contact navlinks
                serv.style.display = "none";
                cont.style.display = "none";

            }
            // if not, then we are in landing mode
            else if (!portfolioClicked) {
                // display inline for Services and Contact navlinks
                serv.style.display = "inline-block";
                cont.style.display = "inline-block";

            }
        }

    })



    return (
        <div id="navbar" >
            <div className="topnav">
                <span id="title">
                    <Link to="/" onClick={() => {
                        setClicked(false)
                    }} > Phillip("Nguyen");</Link>
                </span>
                <span id="my-links">
                    <span className="hashlink">
                        <Link to="/" onClick={() => {
                            setClicked(false)
                        }} > Home</Link>

                    </span>
                    <span className="hashlink services" >
                        <HashLink smooth to="#Services">Services</HashLink>
                    </span>
                    <span className="hashlink">
                        <Link to="/Portfolio" onClick={() => {
                            setClicked(true)
                        }}>Portfolio</Link>
                    </span>
                    <span className="hashlink contact" >
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

            <style jsx="true">
                {`
                    #icon {
                        display: none;
                    }

                    @media screen and (max-width: 768px) {
                        #navbar {
                            padding: 10px;
                        }
                        #navbar .topnav {
                            display: ${isClicked ? 'grid' : 'flex'};
                            grid-gap: 30px;
                            grid-template-columns: 1fr 3fr 1fr;
                            transition: height 0.5s linear;
                        }
                        #navbar #my-links {
                            display: ${isClicked ? 'flex' : 'none'};
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
                            justify-self: flex-end;
                            padding-left: 20px;
                        }

                        #navbar a:hover {
                            color: #777;
        
                        }
                    }
                    @media screen and (max-width: 768px) {
                        #title a{
                            display: ${isClicked ? 'none' : 'inline'};
                        }

                        #navbar .topnav {
                            grid-template-columns:  1fr 2fr 1fr;
                            transition: height 0.5s linear;
                        }
                    }

                `}
            </style>



        </div >
    );
}

