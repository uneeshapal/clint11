import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8700/admin/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success("Seller Login Successful!");

        sessionStorage.setItem(
          "adminToken",
          res.data.token
        );

        sessionStorage.setItem(
          "admin",
          JSON.stringify(res.data.admin)
        );

        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
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
            Seller Login
          </h3>

          <form onSubmit={handleLogin}>

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
              Login
            </button>

          </form>

          <p className="text-center mt-3">
            Don't have an account?{" "}

            <span
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/register")}
            >
              Register
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

export default AdminLogin;