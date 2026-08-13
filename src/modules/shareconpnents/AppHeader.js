import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./AppSidebar";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState("");
    const [showSidebar, setShowSidebar] = useState(false);
    const [showLoginMenu, setShowLoginMenu] = useState(false);

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
        } else if (
            value.includes("jacket") ||
            value.includes("shirt") ||
            value.includes("shoes") ||
            value.includes("watch") ||
            value.includes("hoodie") ||
            value.includes("jeans") ||
            value.includes("wallet")
        ) {
            navigate("/men");
        } else if (
            value.includes("mobile") ||
            value.includes("phone") ||
            value.includes("laptop") ||
            value.includes("camera") ||
            value.includes("headphone")
        ) {
            navigate("/electronics");
        } else if (value.includes("medicine")) {
            navigate("/medicine");
        } else {
            alert("Product Not Found");
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom">
                <div className="container">

                    {/* Logo */}
                    <Link
                        className="navbar-brand fw-bold fs-3 text-danger"
                        to="/"
                    >
                        SmartBuy
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="btn btn-outline-danger ms-2 d-lg-none"
                        onClick={() => setShowSidebar(true)}
                    >
                        ☰
                    </button>

                    {/* Desktop Navbar */}
                    <div className="d-none d-lg-flex align-items-center w-100">

                        <ul className="navbar-nav me-auto ms-4">

                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-semibold"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-semibold"
                                    to="/about"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-semibold"
                                    to="/story"
                                >
                                    About
                                </Link>
                            </li>

                        </ul>

                        {/* ONLY ONE SEARCH */}
                        {!hideSearch && (
                            <form
                                className="d-flex me-3"
                                onSubmit={handleSearch}
                            >
                                <input
                                    className="form-control me-2"
                                    placeholder="Search Products..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />

                                <button className="btn btn-danger">
                                    <FaSearch />
                                </button>
                            </form>
                        )}

                        {/* LOGIN DROPDOWN */}
                        <div className="position-relative">

                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() =>
                                    setShowLoginMenu(!showLoginMenu)
                                }
                            >
                                Sign In ▾
                            </button>

                            {showLoginMenu && (
                                <div
                                    className="login-dropdown shadow"
                                    onMouseLeave={() =>
                                        setShowLoginMenu(false)
                                    }
                                >

                                    <button
                                        className="dropdown-item"
                                        onClick={() => {
                                            setShowLoginMenu(true);
                                            navigate("/login");
                                        }}
                                    >
                                        👤 Buyer Login
                                    </button>

                                    <button
                                        className="dropdown-item"
                                        onClick={() => {
                                            setShowLoginMenu(true);
                                            navigate("/admin/login");
                                        }}
                                    >
                                        🏪 Seller Login
                                    </button>

                                </div>
                            )}

                        </div>

                    </div>

                </div>
            </nav>

            {/* Mobile Sidebar */}
            {showSidebar && (
                <>
                    <div
                        onClick={() => setShowSidebar(false)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,.5)",
                            zIndex: 999,
                        }}
                    />

                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "260px",
                            height: "100vh",
                            background: "#fff",
                            zIndex: 1000,
                            overflowY: "auto",
                            padding: "20px",
                        }}
                    >

                        <button
                            className="btn btn-danger mb-3"
                            onClick={() => setShowSidebar(false)}
                        >
                            ✕
                        </button>

                        <Sidebar
                            mobile={true}
                            closeSidebar={() =>
                                setShowSidebar(false)
                            }
                        />

                    </div>
                </>
            )}
        </>
    );
}

export default Navbar;