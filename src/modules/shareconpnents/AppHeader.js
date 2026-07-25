import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  // Login/Register page par search hide
  const hideSearch =
    location.pathname === "/register" ||
    location.pathname === "/login";

const handleSearch = (e) => {
  e.preventDefault();

  const value = search.toLowerCase().trim();

  if (
    value.includes("women") ||
    value.includes("dress") ||
    value.includes("makeup") ||
    value.includes("handbag")
  ) {
    navigate("/women");
  }

 else if (
  value.includes("jacket") ||
  value.includes("formal shirt") ||
  value.includes("shoes") ||
  value.includes("watch") ||
  value.includes("hoodie") ||
  value.includes("jeans") ||
  value.includes("wallet")
) {
  navigate("/men");
}
  else if (
    value.includes("mobile") ||
    value.includes("phone") ||
    value.includes("laptop") ||
    value.includes("camera") ||
     value.includes("headphone")||
    value.includes("")
  ) {
    navigate("/electronics");
  }

  else if (
    value.includes("medicine")
  ) {
    navigate("/medicine");
  }

  else {
    alert("Product Not Found");
  }
};

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">
          SmartBuy
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/story">
                About
              </Link>
            </li>

          </ul>

          {/* Search */}
          {!hideSearch && (
            <form className="d-flex me-3" onSubmit={handleSearch}>

              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button className="btn btn-danger" type="submit">
                <FaSearch />
              </button>

            </form>
          )}

          {/* Sign In */}
          <Link to="/register" className="btn btn-outline-danger">
            Sign In
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;