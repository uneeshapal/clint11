import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminNavbar from "./AdminNavbar";

function AdminRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8700/admin/register",
        {
          name,
          email,
          password,
        }
      );

      if (res.data.success) {
        toast.success("Seller Registered Successfully!");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1500);
      }
    } catch (error) {
      console.log("REGISTER ERROR:", error);

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <>
      <AdminNavbar />

      <div
        className="container mt-5"
        style={{ maxWidth: "400px" }}
      >
        <div className="card shadow p-4">

          <h3 className="text-center mb-4">
            Seller Register
          </h3>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Seller Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Seller Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn btn-danger w-100"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?{" "}

            <span
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/login")}
            >
              Login
            </span>
          </p>

        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default AdminRegister;