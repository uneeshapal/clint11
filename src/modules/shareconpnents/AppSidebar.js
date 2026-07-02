import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
    return (
        <div className="col-md-3 border-end">
            <ul className="list-unstyled">
                <Link
                    to="/women"
                    className="text-decoration-none text-dark"
                >

                    Women's Fashion
                </Link>
              
                <li className="mb-3">Men's Fashion</li>
                <li className="mb-3">Electronics</li>
                <li className="mb-3">Home & Lifestyle</li>
                <li className="mb-3">Medicine</li>
                <li className="mb-3">Sports & Outdoor</li>
                <li className="mb-3">Health & Beauty</li>
            </ul>
        </div>
    );
}

export default Sidebar;