import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        // console.log(Email);
        // console.log(Password);
        axios.post("http://localhost:5000/userLogin", {
            email: Email,
            password: Password
        })
            .then(function (response) {
                console.log(response.data);

                const Username = response.data.name;
                const Userid = response.data._id;
                const Email = response.data.email;
                const Number = response.data.number;
                const Name = response.data.username;
                const role = response.data.role;

                localStorage.setItem("Name", Username)
                localStorage.setItem("email", Email)
                localStorage.setItem("number", Number)
                localStorage.setItem("userid", Userid)
                localStorage.setItem("username", Name)
                localStorage.setItem("role", role)

                const getName = localStorage.getItem("Name");
                console.log(getName);
                navigate("/")
            })
            .catch(function (error) {
                console.log(error);
                console.log("error");
                toast.error('invalid credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            });
    }

    return (
        <div className="rs">
            <div className="con">
                <div className="title" align="center"><b>Login Form</b></div>
                <div className="content">
                    <form action="#">
                        <div className="user-detail">
                            {/* <div className="log" align="center">
                                <input type="button" value="Login" />
                                <Link to="/register"><input type="button" value="Signup" /></Link>
                            </div> */}
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" width={130} />
                            </div>

                            {/* <div class="radio-pillbox">
                                <radiogroup>
                                    <div>
                                        <input type="radio" name="radio-group" id="js" value="JavaScript" class="first">
                                        <label for="js" class="radio-label">JavaScript</label>
                                        </input>
                                    </div>
                                    <div>
                                        <input type="radio" name="radio-group" id="html5" value="HTML5">
                                        <label for="tricky">HTML5</label>
                                    </input>
                                    </div>
                                </radiogroup>
                            </div> */}
                            <div className="inputbox">
                                <input type="text" placeholder="Email Address" id="" required value={Email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="inputbox">
                                <input type="password" placeholder="Password" required value={Password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/* <div className="forgot">
                                <a href="#">Forgot Password?</a>
                            </div> */}
                            <div className="button">
                                <input type="submit" value="Login" onClick={submit} />
                                <ToastContainer />
                            </div>
                            <div className="signup" align="center">
                                <span>Not a Member?</span> <Link to="/register">Signup now</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login