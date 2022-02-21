import React from 'react';

import Software from '../../../data/software';

import data from '../../../data/data';

import './index.css';

export default function Covid() {


    return (
        <div className="Covid">
            <div className="covid-wrapper">
                <div className="title-covid" id="title-c">
                    <h3>
                        <a href={data[0].link}>
                            Covid-19 World Tracker
                        </a>
                    </h3>
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
                            Software.map((s) => {
                                if (s.id < 8) {
                                    return (
                                        <li key={s.id}>
                                            <img className="programming" src={s.img} width="64" height="64" />
                                        </li>
                                    )
                                }

                            }

                            )
                        }
                    </ul>
                </div>
                <div className="diagram">
                    <h3>B. Blueprints</h3>
                    <div className="blueprint">
                        <img alt="blue print" src="/img/diagrams/covid-blueprint.png" />

                    </div>
                    <div className="bp-content">
                        <ul className="bp-list">
                            <li>
                                This is the blueprint for the entire architecture of my Covid Tracker project.
                                The project uses third-party API: Covid19API.com to get Covid data of confirmed cases, recovered cases,
                                and deaths around the world. I also used NewsAPI to get the news from the United States, so users can
                                keep track of what is going on related to Covid-19 news.
                            </li>
                            <li>
                                The API's will then be converted to JSON files to CSV files, then connect to MySQL using Python.
                            </li>
                            <li>
                                .NET Core MVC 3.0 will be the HttpRequestHandler from MySQL database. This framework will also
                                be the one which configure the CORS allowance, generate API from MySQL, and build JWT Authentication.
                            </li>
                            <li>
                                After that, Angular will fetch and retrieve the data gotten by the MVC Framework, and display to the
                                UI.
                                <ul>
                                    <li>
                                        We will also have 2 roles: Admin and Users.
                                        <ul>
                                            <li>
                                                Admin: Able to view all of the components in the dashboard, including getting lists of
                                                registered users.
                                            </li>
                                            <li>
                                                User: Able to view Dashboard components, excluding table of users.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                I also drew a blueprint of dashboard as below:
                            </li>
                        </ul>
                        <div className="bp-dashboard">
                            <img alt="dashboard blueprint" src="/img/diagrams/covid-dashboard.png" />
                        </div>
                    </div>

                </div>
                <div className="covid-app">
                    <h3>C. Quick look on Covid Tracker app </h3>
                    <p>
                        Unfortunately, you cannot use the web app currently, since AWS server is down due to the cost of database.
                        However, you can still fork the repository to try by yourself. Here are some of the quick look of the app:
                    </p>

                    <div className="covid-dashboard">
                        <img alt="landing page" src="/img/diagrams/db_1.png" />
                        <img alt="news" src="/img/diagrams/db_2.png" />
                        <img alt="graph" src="/img/diagrams/db_3.png" />
                    </div>

                </div>


            </div>
        </div>
    );


}

