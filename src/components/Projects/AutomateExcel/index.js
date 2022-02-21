import React, { Component } from 'react';

import data from '../../../data/data';

import Software from '../../../data/software';
import AnimatedPage from '../../AnimatedPage';

import './index.css';

export default function automating_excel() {
    return (
        <div className="Automate">
            <AnimatedPage>

                <div className="automate-wrapper">
                    <div className="title-automate" id="title-a">
                        <h3>
                            <a href={data[1].link}>
                                Automating Excel
                            </a>
                        </h3>
                    </div>
                    <div className="title-automate" id="desc-a">
                        <p>
                            Automating Excel App uses Python, Tkinter, and Selenium to help researchers be more convenient when calculating large amouunt of molecules data
                        </p>
                    </div>

                    <div className="software">
                        <h3>A. Programming languages, framework, and software used in the project:</h3>
                        <ul className="sw-automate">
                            {
                                Software.map((s) => {
                                    if (s.id == 1 || s.id == 6 || s.id == 8) {
                                        return (<li key={s.id}>
                                            <img className="programming" src={s.img} />
                                        </li>)
                                    }


                                }
                                )
                            }
                        </ul>
                    </div>

                </div>
            </AnimatedPage>
        </div>
    );
}