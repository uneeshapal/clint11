import React from "react";
import { FaUserCircle } from "react-icons/fa";

function AdminNavbar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        height: "70px",
        borderBottom: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <div>
        <h2 className="text-danger m-0 fw-bold">SmartBuy</h2>
        <small>Admin Panel</small>
      </div>

      <FaUserCircle size={35} />
    </div>
  );
}

export default AdminNavbar;