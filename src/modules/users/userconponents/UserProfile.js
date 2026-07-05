import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../../../services/Urlpath.js";

import {
  FaBoxOpen,
  FaHeart,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";

function Userprofile() {

const [user, updateuser] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  gender: "",
  role: "",
});

const getemail = () => {
  const email = sessionStorage.getItem("currentuser");

  console.log("Session Email:", email);

  axios
    .post(`${baseurl}/profile`, { email })
    .then((r) => {
      console.log("API Response:", r.data);
      console.log("User Data:", r.data.userlist);

      if (r.data.userlist) {
        updateuser(r.data.userlist);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  getemail();
}, []);
  return (
    <>
   

      <div className="container-fluid bg-light min-vh-100">
        <div className="row">


          {/* Main Content */}
          <div className="col-md-10 bg-light min-vh-100 p-4">
            <h2 className="mb-4">Welcome Your DashBoard</h2>

            {/* Top Cards */}
            <div className="row g-4">
              <div className="text-center mb-4">
                {/* <img
                  src={user?.profile || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="rounded-circle border"
                  width="120"
                  height="120"
                /> */}

                <h1 className="mt-3">{user?.name}</h1>
                <p>{user?.email || "user@email.com"}</p>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm border-0 rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Wishlist</h6>
                      <h3>12</h3>
                      <small className="text-danger">
                        Saved Items
                      </small>
                    </div>
                    <FaHeart size={35} color="red" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm border-0 rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Cart Items</h6>
                      <h3>8</h3>
                      <small className="text-warning">
                        Ready to Checkout
                      </small>
                    </div>
                    <FaShoppingCart size={35} color="#f59e0b" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm border-0 rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Total Spent</h6>
                      <h3>₹18,500</h3>
                      <small className="text-success">
                        Lifetime Purchases
                      </small>
                    </div>
                    <FaWallet size={35} color="#16a34a" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
          {/* User Details */}
<div className="card shadow-sm border-0 rounded-4 p-4 mt-5">
  <h4 className="mb-4">User Details</h4>

  <div className="row">

    <div className="col-md-6 mb-3">
      <strong>Name :</strong>
      <p>{user?.name}</p>
    </div>

    <div className="col-md-6 mb-3">
      <strong>Email :</strong>
      <p>{user?.email}</p>
    </div>

    <div className="col-md-6 mb-3">
      <strong>Phone :</strong>
      <p>{user?.phone}</p>
    </div>

    <div className="col-md-6 mb-3">
      <strong>Gender :</strong>
      <p>{user?.gender}</p>
    </div>

    <div className="col-md-6 mb-3">
      <strong>Address :</strong>
      <p>{user?.address}</p>
    </div>

    <div className="col-md-6 mb-3">
      <strong>Role :</strong>
      <p>{user?.role}</p>
    </div>

  </div>
</div>
          </div>
        </div>
      </div>

 
    </>
  );
}

export default Userprofile;