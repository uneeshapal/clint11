import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";

function Sidebar() {
  return (
    <div className="col-md-3 border-end">
      <ul className="list-unstyled ps-4 pt-3">

        <li className="mb-3">
          <Link to="/women" className="sidebar-link">
            Women's Fashion
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/men" className="sidebar-link">
            Men's Fashion
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/electronics" className="sidebar-link">
            Electronics
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/lifestyle" className="sidebar-link">
            Home & Lifestyle
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/medicine" className="sidebar-link">
            Medicine
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/sports" className="sidebar-link">
            Sports & Outdoor
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/beauty" className="sidebar-link">
            Health & Beauty
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;