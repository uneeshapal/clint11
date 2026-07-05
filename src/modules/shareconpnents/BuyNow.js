import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Checkout() {

  const { state } = useLocation();
  const product = state;

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

    axios.post("http://localhost:8700/placeorder", {

      email: sessionStorage.getItem("currentuser"),

      productid: product.id,
      productname: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,

      ...order

    })
    .then((res) => {
      alert("Order Placed Successfully");
    })
    .catch((err) => {
      console.log(err);
    });

  };

  return (
    <div className="container py-5">

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
              className="img-fluid rounded mb-3"
              alt=""
            />

            <h5>{product.name}</h5>

            <p>Quantity : 1</p>

            <h4 className="text-danger">
              {product.price}
            </h4>

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h4>{product.price}</h4>
            </div>

            <button
              className="btn btn-success w-100 mt-4"
              onClick={placeOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;