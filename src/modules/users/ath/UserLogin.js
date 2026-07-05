import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock,FaBoxOpen } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../../../services/Urlpath.js";





function Login() {
    const mynav = useNavigate();

    const [login, updatelogin] = useState({
        email: "",
        password: ""
    })

    const fieldupdate = (e) => {
        const { name, value } = e.target;
        updatelogin({
            ...login,
            [name]: value
        })
    }
    const mylogin = () => {
        axios.post(`${baseurl}/login`, login)
            .then((r) => {
                if (r.data.status === 210) {
                    toast.warning(r.data.msg);
                }

                if (r.data.status === 211) {
                    toast.warning(r.data.msg);
                }

                if (r.data.status === 240) {
                    toast.error(r.data.msg);
                }

                if (r.data.status === 251) {
                    toast.success(r.data.msg);
                    sessionStorage.setItem("currentuser", r.data.userinfo.email);

                    setTimeout(() => {
                        mynav("/dash");
                    }, 1500);
                }
                if (r.data.status === 260) {
                    toast.warning(r.data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };




    return (
        <>
         

            {/* Login Form */}
            <div className="container py-5 d-flex justify-content-center align-items-center">
                <img
                    src="https://i.pinimg.com/originals/33/50/05/335005b8eab00e041475d300c1478c4b.gif"
                    alt=""
                    className="img-fluid"
                    style={{
                        width: "50%",
                        height: "350px",
                        objectFit: "cover"
                    }}
                />

              
                <ToastContainer />
                <div className="card p-4 shadow" style={{ width: "350px" }}>


                    <h2 className="text-center mb-4">Login</h2>

                    <form>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FaUser />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={login.email}
                                onChange={fieldupdate}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={login.password}
                                onChange={fieldupdate}
                            />
                        </div>

                        <button
                            className="btn btn-primary w-100"
                            type="button"
                            onClick={mylogin}
                        >
                            Login
                        </button>

                        {/* <Link to="/"></Link> */}

                        <p className="text-center mt-3">
                            Don't have an account? <a href="/register">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>

           
        </>
    );
}
export default Login;