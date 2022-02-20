import React, { Component, useState } from 'react';
import { Link, Outlet, } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import data from '../../data/data';
import CellCollective from '../Projects/CellCollective';
import AutomateExcel from '../Projects/AutomateExcel';
import Covid from '../Projects/Covid';

import './index.css';

import AnimatedPage from '../AnimatedPage';

export default function Portfolio() {

    return (
        <div id="Portfolio">
            <AnimatedPage>
                <div className="wrapper">
                    <div className="inside-wrap" id="title-port">
                        <h3>PORTFOLIO</h3>
                        <p>These are the work I have contributed</p>
                    </div>
                    <div className="inside-wrap" id="grid-group">
                        {data.map((d) =>
                            <div key={d.title} className="item">
                                <Link to={`${d.router}`}>
                                    {/* <Link to="/Portfolio"> */}
                                    <a href="" className="project_link">
                                        <img src={d.img} alt={d.title} />
                                    </a>
                                </Link>

                                <div className="item-desc">
                                    <h4>{d.title}</h4>
                                    <p>{d.description}</p>
                                    <a href={d.link} className="a_hidden">Learn more</a>
                                </div>


                            </div>
                        )
                        }

                    </div>
                    <Routes>
                        {/* no need to add /Portfolio before any path, since that will navigate to a blank page */}
                        <Route exact path="/Portfolio" element={<Navigate to="/Portfolio/covid-project" />} />
                        <Route exact path="/covid-project" element={<Covid />} />
                        <Route path="/cc-project" element={<CellCollective />} />
                        <Route path="/automate-project" element={<AutomateExcel />} />
                    </Routes>


                </div>
            </AnimatedPage>
            <div style={{ height: 'calc(20vh)' }}></div>
            <footer>
                Copyright &copy; 2022 by Phillip Nguyen. All Rights Reserved.
            </footer>

        </div>


    );
}