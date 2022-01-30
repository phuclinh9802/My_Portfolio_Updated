import React, { Component } from 'react';


import './index.css'

export default function Services() {
    const app = '/img/app.png';
    const teamwork = '/img/teamwork.png';
    const web = '/img/web.png';

    return (
        <div id="Services">
            <div id="wrap">
                <div class="cont" id="title">
                        WHAT I DO
                </div>
                <div class="cont" id="subtitle">
                    These are the services that I offer
                </div>
                <div class="cont" id="grid">
                    <div class="grid-item">
                        <img src={web} alt="Web Development"/>
                        <h3>Web Development</h3>
                        <p>Several experiences with full-stack
                            web development using React, Angular as 
                            Front-end, and C#, Javascript, Node.JS as Back-end
                        </p>
                    </div>
                    <div class="grid-item">
                        <img src={app} alt="App Development"/>
                        <h3>App Development</h3>
                        <p>Building Windows/iOS application using Python, Selenium
                            and Tkinter </p>
                    </div>
                    <div class="grid-item">
                        <img src={teamwork} alt="Teamwork"/>
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