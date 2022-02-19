import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import './index.css'

export default function Services() {
    const app = '/img/app.png';
    const teamwork = '/img/teamwork.png';
    const web = '/img/web.png';

    return (
        <div id="Services">
            <div id="wrap">
                <div className="cont" id="title">
                    WHAT I DO
                </div>
                <div className="cont" id="subtitle">
                    These are the services that I offer
                </div>
                <div className="cont" id="grid">
                    <div className="grid-item">
                        {/* <<img src={web} alt="Web Development"/>> */}
                        <span className="icon">
                            <FontAwesomeIcon color="#669dd1" icon={faWindowRestore} size="4x" />
                        </span>
                        <h3>Web Development</h3>
                        <p>Several experiences with full-stack
                            web development using React, Angular as
                            Front-end, and C#, Javascript, Node.JS as Back-end
                        </p>
                    </div>
                    <div className="grid-item">
                        {/* <img src={app} alt="App Development"/> */}
                        <span className="icon">
                            <FontAwesomeIcon color="#d9a778" icon={faLaptopCode} size="4x" />
                        </span>
                        <h3>App Development</h3>
                        <p>Building Windows/iOS application using Python, Selenium
                            and Tkinter </p>
                    </div>
                    <div className="grid-item">
                        {/* <img src={teamwork} alt="Teamwork"/> */}
                        <span className="icon">
                            <FontAwesomeIcon color="#6bb58d" icon={faUsers} size="4x" />
                        </span>
                        <h3>Teamwork</h3>
                        <p>Ability to collaborate with people to come up with
                            the best ideas and solutions to manage/solve problems
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}