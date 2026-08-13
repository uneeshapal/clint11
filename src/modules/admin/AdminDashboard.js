import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard() {
  return (
    <>
      {/* Full Width Navbar */}
      <AdminNavbar />

      {/* Sidebar + Content */}
      <div className="d-flex">
        <AdminSidebar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;