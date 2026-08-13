import React from "react";
import "../admin/Admin.css";
import { NavLink } from "react-router-dom";
import {
  FaPlusCircle,
  FaClipboardList,
  FaShoppingBag,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-options">

        <NavLink
          to="/admin/add-product"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-option active"
              : "admin-sidebar-option"
          }
        >
          <FaPlusCircle size={20} />
          <p>Add Product</p>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-option active"
              : "admin-sidebar-option"
          }
        >
          <FaClipboardList size={20} />
          <p>Product List</p>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-option active"
              : "admin-sidebar-option"
          }
        >
          <FaShoppingBag size={20} />
          <p>Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default AdminSidebar;