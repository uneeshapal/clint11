import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../../shareconpnents/AppSidebar";



const cartItems = [
  {
    id: 1,
    name: "Dark Denim Shirt",
    color: "Dark Blue",
    qty: 1,
    price: 120,
    image: "https://via.placeholder.com/70",
  },
  {
    id: 2,
    name: "Denim Trendy Jacket",
    color: "Sky Blue",
    qty: 1,
    price: 120,
    image: "https://via.placeholder.com/70",
  },
  {
    id: 3,
    name: "Retro Shirt For Women",
    color: "Magenta",
    qty: 2,
    price: 220,
    image: "https://via.placeholder.com/70",
  },
];

function Cart() {
  const subtotal = cartItems.reduce((a, b) => a + b.price, 0);

return (
  <>
    

    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light py-5">
        <div
          className="container bg-white shadow rounded p-4"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-center fw-bold mb-4">
            Your Shopping Cart
          </h3>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card border-0 shadow-sm mb-3 p-3"
            >
              <div className="row align-items-center">

                <div className="col-md-5 d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded"
                    width="70"
                    height="70"
                  />

                  <div className="ms-3">
                    <h6 className="mb-1">{item.name}</h6>
                    <small className="text-muted">
                      #order1234
                    </small>
                  </div>
                </div>

                <div className="col-md-2 text-center">
                  {item.color}
                </div>

                <div className="col-md-2">
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-secondary btn-sm">
                      -
                    </button>

                    <span className="mx-3">
                      {item.qty}
                    </span>

                    <button className="btn btn-outline-secondary btn-sm">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-md-2 text-primary fw-bold text-center">
                  ${item.price}
                </div>

                <div className="col-md-1 text-end">
                  <button className="btn-close"></button>
                </div>

              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <h5>Subtotal</h5>

            <h4 className="text-primary fw-bold">
              ${subtotal}
            </h4>
          </div>

          <hr />

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-pill px-5">
              ← Back to Shop
            </button>

            <button className="btn btn-primary rounded-pill px-5">
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>

  
  </>
);
  
}

export default Cart;