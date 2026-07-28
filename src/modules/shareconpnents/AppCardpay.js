import React, { useState } from "react";
import Navbar from "./AppHeader";
import Footer from "./AppFooter";
import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardPayment() {

  const navigate = useNavigate();

  const [card, setCard] = useState({
    holder: "",
    number: "",
    expiry: "",
    cvv: ""
  });

  const fieldUpdate = (e) => {
    const { name, value } = e.target;

    setCard({
      ...card,
      [name]: value
    });
  };

  const payNow = () => {

    if (
      card.holder === "" ||
      card.number === "" ||
      card.expiry === "" ||
      card.cvv === ""
    ) {
      toast.warning("Please fill all card details");
      return;
    }

    if (card.number.length !== 16) {
      toast.warning("Card Number must be 16 digits");
      return;
    }

    if (card.cvv.length !== 3) {
      toast.warning("CVV must be 3 digits");
      return;
    }

    toast.success("Payment Successful 🎉");

    setTimeout(() => {
      navigate("/dash");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />

      <div className="container py-5" style={{ minHeight: "80vh" }}>
        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="card shadow-lg border-0 rounded-4">

              <div
                className="text-center py-4"
                style={{
                  background: "#0d6efd",
                  color: "#fff"
                }}
              >
                <FaCreditCard size={40} />
                <h2 className="mt-2">Card Payment</h2>
                <p>Credit / Debit Card</p>
              </div>

              <div className="p-4">

                <label className="fw-bold">
                  Card Holder Name
                </label>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="John Doe"
                  name="holder"
                  value={card.holder}
                  onChange={fieldUpdate}
                />

                <label className="fw-bold">
                  Card Number
                </label>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                  name="number"
                  value={card.number}
                  onChange={fieldUpdate}
                />

                <div className="row">

                  <div className="col">

                    <label className="fw-bold">
                      Expiry
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                      name="expiry"
                      value={card.expiry}
                      onChange={fieldUpdate}
                    />

                  </div>

                  <div className="col">

                    <label className="fw-bold">
                      CVV
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="123"
                      maxLength={3}
                      name="cvv"
                      value={card.cvv}
                      onChange={fieldUpdate}
                    />

                  </div>

                </div>

                <button
                  className="btn btn-primary w-100 mt-4 py-3 fw-bold"
                  onClick={payNow}
                >
                  Pay Securely
                </button>

                <button
                  className="btn btn-outline-dark w-100 mt-3"
                  onClick={() => navigate(-1)}
                >
                  <FaArrowLeft /> Back
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CardPayment;