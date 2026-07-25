import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {

    const email = sessionStorage.getItem("currentuser");

    axios.post("http://localhost:8700/getcart", {
      email
    })
      .then((res) => {
  console.log(res.data.cart);
  setCartItems(res.data.cart);
})
      .catch((err) => {
        console.log(err);
      });

  }, []);
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };

  const decreaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold mb-4">
        🛒 My Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your Cart is Empty 😔</h4>

          <button
            className="btn btn-danger mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              className="card shadow border-0 rounded-4 mb-4"
              key={item._id}
            >
              <div className="row g-0 align-items-center p-3">
                <div className="col-md-2 text-center">

                  <input
                    type="checkbox"
                    className="form-check-input mb-2"
                    onChange={(e) => {

                      if (e.target.checked) {

                        setSelectedItems([
                          ...selectedItems,
                          item
                        ]);

                      } else {

                        setSelectedItems(
                          selectedItems.filter(
                            (p) => p._id !== item._id
                          )
                        );

                      }

                    }}
                  />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded"
                    style={{
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                <div className="col-md-4">
                  <h5>{item.name}</h5>
                  <p className="text-muted">
                    Color : {item.color}
                  </p>
                  <h5 className="text-danger">
                    {item.price}
                  </h5>
                </div>

                <div className="col-md-3 text-center">

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => decreaseQty(item._id)}
                  >
                    -
                  </button>

                  <span className="mx-3 fw-bold">
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => increaseQty(item._id)}
                  >
                    +
                  </button>

                </div>

                <div className="col-md-2 text-center">

                  <h5>
                    ₹{
                      parseFloat(item.price.replace("$", "")) *
                      item.quantity
                    }
                  </h5>

                </div>

                <div className="col-md-1 text-center">

                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item._id)}
                  >
                    X
                  </button>

                </div>

              </div>
            </div>
          ))}

          <div className="card shadow p-4">

            <div className="d-flex justify-content-between">

              <h4>Total</h4>

              <h3 className="text-success">
                ₹{subtotal}
              </h3>

            </div>

            <div className="mt-4 d-flex gap-3">

              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
<button
  className="btn btn-success"
  onClick={() => {
    console.log("Sending:", cartItems[0]);

    navigate("/women/product/buynow", {
      state: cartItems[0]
    });
  }}
>
  Checkout
</button>

            </div>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;