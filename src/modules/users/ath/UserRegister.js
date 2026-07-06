import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../shareconpnents/AppHeader";
import Footer from "../../shareconpnents/AppFooter";



const baseurl = "http://localhost:8700";

function Register() {
    const mynav = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

const mysubmit = async (data) => {
  try {
    const res = await axios.post(`${baseurl}/register`, data);

    sessionStorage.setItem("currentuser", res.data.data.email);

    toast.success("Successfully registered");

    setTimeout(() => {
      mynav("/");
    }, 2000);
  } catch (err) {
    toast.error("Registration Failed");
  }
};
    return (
        <>
         <Navbar />

            <div className="container py-5 d-flex justify-content-center align-items-center">
                <img
                    src="https://i.pinimg.com/originals/33/50/05/335005b8eab00e041475d300c1478c4b.gif"
                    alt=""
                    className="img-fluid"
                    style={{
                        width: "50%",
                        height: "350px",
                        objectFit: "cover",
                    }}
                />

                <ToastContainer />

                <div className="card p-4 shadow" style={{ width: "450px" }}>
                    <h2 className="text-center mb-4">Register</h2>

                    <form onSubmit={handleSubmit(mysubmit)}>
                        {/* Name */}
                        <div className="input-group mb-2">
                            <span className="input-group-text">
                                <FaUser />
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="User Name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                        </div>

                        <p className="text-danger">{errors.name?.message}</p>

                        {/* Email */}
                        <div className="input-group mb-2">
                            <span className="input-group-text">
                                <FaEnvelope />
                            </span>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />
                        </div>

                        <p className="text-danger">{errors.email?.message}</p>

                        {/* Phone */}
                        <div className="input-group mb-2">
                            <span className="input-group-text">📞</span>

                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number"
                                {...register("phone", {
                                    required: "Phone Number is required",
                                    minLength: {
                                        value: 10,
                                        message: "Phone number must be 10 digits",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Phone number must be 10 digits",
                                    },
                                })}
                            />
                        </div>

                        <p className="text-danger">{errors.phone?.message}</p>

                        {/* Address */}
                        <div className="input-group mb-2">
                            <span className="input-group-text"></span>

                            <textarea
                                className="form-control"
                                placeholder="Address"
                                rows="2"
                                {...register("address", {
                                    required: "Address is required",
                                })}
                            ></textarea>
                        </div>

                        <p className="text-danger">{errors.address?.message}</p>

                        {/* Gender */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <select
                                    className="form-select"
                                    {...register("gender", {
                                        required: "Gender is required",
                                    })}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>

                                <p className="text-danger">{errors.gender?.message}</p>
                            </div>

                            <div className="col-md-6 mb-3">
                                <select
                                    className="form-select"
                                    {...register("role", {
                                        required: "Please select Buyer or Seller",
                                    })}
                                >
                                    <option value="">Select Role</option>
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>
                                </select>

                                <p className="text-danger">{errors.role?.message}</p>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="input-group mb-2">
                            <span className="input-group-text">
                                <FaLock />
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                        </div>

                        <p className="text-danger">{errors.password?.message}</p>

                        <button className="btn btn-primary w-100" type="submit">
                            Register <Link to="/"></Link>
                        </button>

                        <p className="text-center mt-3">
                            Already have an account?{" "}
                            <Link to="/login">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
<Footer/>
       
        </>
    );
}

export default Register;