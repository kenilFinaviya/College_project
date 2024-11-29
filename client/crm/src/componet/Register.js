import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import log from "../image/log.svg"
import register from "../image/register.svg"
import "./Register.css"

const Register = () => {
    const [role, setRole] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")
    const [Cpassword, setCPassword] = useState("")
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault();
        // alert()
        axios.post("http://localhost:5000/userRegister", {
            role: role,
            name: name,
            username: username,
            email: email,
            password: password,
            number: number
        }).then(function (res) {
            console.log(res.data);
            navigate("/login")
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            
            <div className="rs">
                <div className="container2">
                    <div className="title" align="center">Registration</div>
                    <div className="content">
                        <form action="#">
                            <div className="module-details">
                                <input type="radio" name="module" id="dot-2" value="Organization" onChange={(e) => setRole(e.target.value)} />
                                <input type="radio" name="module" id="dot-3" value="Staff" onChange={(e) => setRole(e.target.value)} />
                                <input type="radio" name="module" id="dot-4" value="Customer" onChange={(e) => setRole(e.target.value)} />
                                <div className="category">
                                    <label for="dot-2">
                                        <span className="dot two"></span>
                                        <span className="module">Organization</span>
                                    </label>
                                    <label for="dot-3">
                                        <span className="dot three"></span>
                                        <span className="module">Staff</span>
                                    </label>
                                    <label for="dot-4">
                                        <span className="dot four"></span>
                                        <span className="module">Customer</span>
                                    </label>
                                </div>
                            </div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" placeholder="Enter your number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="password" placeholder="Confirm your password" value={Cpassword} required onChange={(e) => setCPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" onClick={submit} />
                            </div>
                            <div className="signin" align="center">
                                <span>Already have an account?</span> &nbsp;<Link to="/login">Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register