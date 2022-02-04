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
            <div class="wrap-contact">
                <div class="inside-contact" id="title-contact">
                    <h3>GET IN TOUCH</h3>
                    <p>I am happy to connect with you. Feel free to send me a message in the form below, preferably related to software development jobs</p>
                </div>
                <div class="inside-contact">
                    <div class="form">
                        <div class="form-item"></div>
                        <div class="form-item">
                            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                                <div class="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value) } />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea class="form-control" rows="5" value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="form-item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}