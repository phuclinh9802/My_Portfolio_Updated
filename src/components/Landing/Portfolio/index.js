import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Redirect, Routes, Router, Route } from 'react-router-dom';
import data from '../../../data/data';
import CellCollective from '../../Projects/CellCollective';
import AutomateExcel from '../../Projects/AutomateExcel';
import Covid from '../../Projects/Covid';

import './index.css';

import AnimatedPage from '../../AnimatedPage';

export default function Portfolio() {
    return (
        <AnimatedPage>
            <div id="Portfolio">
                <div className="wrapper">
                    <div className="inside-wrap" id="title-port">
                        <h3>PORTFOLIO</h3>
                        <p>These are the work I have contributed</p>
                    </div>
                    <div className="inside-wrap" id="grid-group">
                        {data.map((d) =>
                            <div key={d.title} className="item">
                                <Link to={`/Portfolio/${d.router}`}>
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
                </div>
                {/* <Routes>
                <Route exact path="covid-project" element={<Covid />} />
                <Route exact path="cc-project" element={<CellCollective />} />
                <Route path="automate-project" element={<AutomateExcel />} />
            </Routes> */}
            </div>

        </AnimatedPage>

    );
}