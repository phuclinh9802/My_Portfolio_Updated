import React from 'react';

import Software from '../../../data/software';

import './index.css';

export default function Covid() {


    return (
        <div className="Covid">
            <div className="covid-wrapper">
                <div className="title-covid" id="title-c">
                    <h3>Covid-19 World Tracker</h3>
                </div>
                <div className="title-covid" id="desc-c">
                    <p>
                        This is a Full-stack personal project which helps users watch, research, and analyze real-time U.S. news data and World's COVID-19 data.
                    </p>
                </div>
                <div className="software">
                    <h3>A. Programming languages, framework, and software used in the project:</h3>
                    <ul className="sw">
                        {
                            Software.map((s) =>
                                <li key={s.id}>
                                    <img className="programming" src={s.img} width="64" height="64" />
                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    );


}

