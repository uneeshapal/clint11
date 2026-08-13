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

function Sidebar({ closeSidebar }) {
  return (
    <div className="shop-sidebar bg-white shadow rounded-4 p-3">

      <h4 className="fw-bold text-danger mb-3">
        Shop By Category
      </h4>

      <ul className="list-unstyled mb-0">

        <li>
          <Link
            to="/women"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaFemale className="me-2 text-danger" />
            Women's Fashion
          </Link>
        </li>

        <li>
          <Link
            to="/men"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaMale className="me-2 text-primary" />
            Men's Fashion
          </Link>
        </li>

        <li>
          <Link
            to="/electronics"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaLaptop className="me-2 text-success" />
            Electronics
          </Link>
        </li>

        <li>
          <Link
            to="/lifestyle"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaHome className="me-2 text-warning" />
            Home & Lifestyle
          </Link>
        </li>

        <li>
          <Link
            to="/medicine"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaCapsules className="me-2 text-info" />
            Medicine
          </Link>
        </li>

        <li>
          <Link
            to="/sports"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaFutbol className="me-2 text-dark" />
            Sports & Outdoor
          </Link>
        </li>

        <li>
          <Link
            to="/beauty"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaSpa className="me-2 text-danger" />
            Skincare & Makeup
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;