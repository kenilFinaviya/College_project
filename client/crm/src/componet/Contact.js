import React, { useState } from 'react'
import "./contact.css"
import Header from './Header'
import Footer from "../componet/Footer"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


const Contact = () => {

    const [Name, setName] = useState([]);
    const [Email, setEmail] = useState([]);
    const [Username, setUsername] = useState([]);
    const [Message, setMessage] = useState([]);

    const getname1 = localStorage.getItem("Name");
    const email1 = localStorage.getItem("email");
    const username1 = localStorage.getItem("username");
    const Navigate = useNavigate()
    const contactHandlar = (e) => {

        e.preventDefault();
        axios.post("http://localhost:5000/admin/help", {
            name: getname1,
            email: email1,
            username: username1,
            message: Message
        })
            .then(function (response) {
                console.log(response);
                Navigate("/")
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <Header />
            <div className='contact_img mb-5 d-flex align-items-center justify-content-center'>
                <h1 style={{ color: "#fff", fontSize: "24px" }}>Contact Us</h1>
            </div>

            <div className="container mb-5">
                {/* <div style={{ textAlign: 'center' }}>
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div> */}
                <div className="row" id="contact-row">

                    <div className="column1">
                        <form className='contact-us'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" value={getname1} onChange={(e) => setName(e.target.value)} placeholder="Your name.." />
                            <label htmlFor="lname">User Name</label>
                            <input type="text" id="lname" value={username1} onChange={(e) => setUsername(e.target.value)} placeholder="Your last name.." />
                            <label htmlFor="mail">E-mail</label>
                            <input type="email" id="email" value={email1} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email.." />
                            <label htmlFor="subject">Message</label>
                            <textarea id="subject" onChange={(e) => setMessage(e.target.value)} placeholder="Write something.." style={{ height: 170 }} />
                            <input type="submit" onClick={contactHandlar} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact