import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Checkout() {

  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const product = state || {
    id: 0,
    name: "No Product Selected",
    price: "₹0",
    image: "https://via.placeholder.com/500x500?text=No+Image"
  };

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash On Delivery"
  });

  const fieldUpdate = (e) => {
    const { name, value } = e.target;

    setOrder({
      ...order,
      [name]: value
    });
  };

 const placeOrder = () => {
  const email = sessionStorage.getItem("currentuser");

if (!email) {
  toast.warning("Please Login or Register First");
  return;
}

  if (
    order.name === "" ||
    order.phone === "" ||
    order.address === "" ||
    order.city === "" ||
    order.state === "" ||
    order.pincode === ""
  ) {
    toast.warning("Please fill all the details first");
    return;
  }

// UPI Payment
if (order.payment === "UPI") {
  navigate("/payment", {
    state: {
      ...product,
      ...order
    }
  });
  return;
}

// Card Payment
if (order.payment === "Card") {
  navigate("/card-payment", {
    state: {
      ...product,
      ...order
    }
  });
  return;
}
 axios.post("http://localhost:8700/placeorder", {

  email: email,

    productid: product.productid,
    productname: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,

    ...order

  })
  .then(() => {

    toast.success("Order Placed Successfully 🎉");

  })
  .catch((err) => {

    console.log(err);
    toast.error("Something went wrong");

  });

};

  return (
      
    <div className="container py-5">
<ToastContainer />
      <div className="row">

        <div className="col-md-7">

          <div className="card shadow p-4">

            <h3 className="mb-4">Shipping Address</h3>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              name="name"
              value={order.name}
              onChange={fieldUpdate}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Mobile Number"
              name="phone"
              value={order.phone}
              onChange={fieldUpdate}
            />

            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Full Address"
              name="address"
              value={order.address}
              onChange={fieldUpdate}
            ></textarea>

            <div className="row">

              <div className="col">

                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={order.city}
                  onChange={fieldUpdate}
                />

              </div>

              <div className="col">

                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  value={order.state}
                  onChange={fieldUpdate}
                />

              </div>

            </div>

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Pincode"
              name="pincode"
              value={order.pincode}
              onChange={fieldUpdate}
            />

            <h4 className="mt-4">Payment Method</h4>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="Cash On Delivery"
                checked={order.payment === "Cash On Delivery"}
                onChange={fieldUpdate}
                name="payment"
              />
              <label className="form-check-label">
                Cash On Delivery
              </label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="UPI"
                checked={order.payment === "UPI"}
                onChange={fieldUpdate}
                name="payment"
              />
              <label className="form-check-label">
                UPI Payment
              </label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="Card"
                checked={order.payment === "Card"}
                onChange={fieldUpdate}
                name="payment"
              />
              <label className="form-check-label">
                Credit / Debit Card
              </label>
            </div>

          </div>

        </div>

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h3>Order Summary</h3>

            <img
              src={product.image}
              className="img-fluid rounded-4 shadow"
              alt={product.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />

            <h4 className="fw-bold mt-3">
              {product.name}
            </h4>

            <p className="text-secondary">
              Quantity : <b>1</b>
            </p>

            <h2 className="text-danger fw-bold">
              {product.price}
            </h2>

            <hr />

            <p className="text-success">
              ✓ In Stock
            </p>

            <p className="text-secondary">
              Free Delivery
            </p>

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h4>{product.price}</h4>
            </div>

            <button
              className="btn btn-danger w-100 py-3 fw-bold"
              onClick={placeOrder}
            >
              Place Order Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;