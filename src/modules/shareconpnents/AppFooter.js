import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-dark text-white mt-5"
      style={{ width: "100%" }}
    >
      <div className="container py-5">
        <div className="row">

          {/* Logo */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="fw-bold text-danger">
              SmartBuy
            </h2>

            <p className="text-light">
              Your One Stop Shopping Destination.
            </p>

            <h6>Subscribe</h6>

            <div className="input-group mt-3">

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />

              <button className="btn btn-danger">
                Subscribe
              </button>

            </div>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Support</h5>

            <p>📍 Ghaziabad, Uttar Pradesh</p>

            <p>📧 support@smartbuy.com</p>

            <p>📞 +91 8860443705</p>

          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <p>Home</p>

            <p>About</p>

            <p>Shop</p>

            <Link to="/about" className="text-white text-decoration-none d-block mb-2">
  Contact
</Link>

          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Account</h5>

           <Link to="/register" className="text-white text-decoration-none d-block mb-2">
  Login / Register
</Link>



            <Link to="/cart" className="text-white text-decoration-none d-block mb-2">
  Cart
</Link>

          </div>

          {/* Social */}
          <div className="col-lg-2 col-md-12">

            <h5>Follow Us</h5>

            <div className="d-flex gap-3 fs-4 mt-3">

              <FaFacebook />

              <FaInstagram />

              <FaTwitter />

              <FaLinkedin />

            </div>

            <h6 className="mt-4">
              Secure Payment
            </h6>

            <div className="d-flex gap-2 mt-2">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                width="45"
                className="bg-white rounded p-1"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                width="40"
                className="bg-white rounded p-1"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo-vector.svg"
                width="45"
                className="bg-white rounded p-1"
                alt=""
              />

            </div>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0 text-secondary">
          © 2026 SmartBuy. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;