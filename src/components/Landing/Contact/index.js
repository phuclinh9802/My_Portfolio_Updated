import React, { Component, useState } from 'react';
import { db } from "../../firebase";

import './index.css'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert('Message has been submitted! Thank you.')
            }).catch(error => {
                alert(error.message);
            })
    }

    return (
        <div id="Contact">
            <div className="wrap-contact">
                <div className="inside-contact" id="title-contact">
                    <h3>GET IN TOUCH</h3>
                    <p>I am happy to connect with you. Feel free to send me a message in the form below, preferably related to software development jobs</p>
                </div>
                <div className="inside-contact">
                    <div className="form">
                        <div className="form-item"></div>
                        <div className="form-item">
                            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="form-item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}