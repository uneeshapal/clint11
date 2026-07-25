import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";

import {
  FaFemale,
  FaMale,
  FaLaptop,
  FaHome,
  FaCapsules,
  FaFutbol,
  FaSpa,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="col-md-3">

      <div className="bg-white shadow rounded-4 p-3">

        <h4 className="fw-bold text-danger mb-4">
          Shop By Category
        </h4>

        <ul className="list-unstyled">

          <li className="mb-3">
            <Link to="/women" className="sidebar-link">
              <FaFemale className="me-2 text-danger" />
              Women's Fashion
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/men" className="sidebar-link">
              <FaMale className="me-2 text-primary" />
              Men's Fashion
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/electronics" className="sidebar-link">
              <FaLaptop className="me-2 text-success" />
              Electronics
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/lifestyle" className="sidebar-link">
              <FaHome className="me-2 text-warning" />
              Home & Lifestyle
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/medicine" className="sidebar-link">
              <FaCapsules className="me-2 text-info" />
              Medicine
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/sports" className="sidebar-link">
              <FaFutbol className="me-2 text-dark" />
              Sports & Outdoor
            </Link>
          </li>

          <li>
            <Link to="/beauty" className="sidebar-link">
              <FaSpa className="me-2 text-danger" />
              Skincare & Makeup
            </Link>
          </li>

        </ul>

      </div>

    </div>
  );
}

export default Sidebar;