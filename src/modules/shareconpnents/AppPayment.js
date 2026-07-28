import React, { useState } from "react";
import Navbar from "./AppHeader";
import Footer from "./AppFooter";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppUpiPayment() {
  const navigate = useNavigate();

  const [upiId, setUpiId] = useState("");

  const payNow = () => {
    if (upiId === "") {
      toast.warning("Enter UPI ID");
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

      <div
        className="container py-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="row justify-content-center">

          <div className="col-md-6">

            <div
              className="card shadow-lg border-0 rounded-4"
              style={{ overflow: "hidden" }}
            >

              {/* Header */}
              <div
                className="text-center py-4"
                style={{
                  background: "#6f42c1",
                  color: "white"
                }}
              >
                <h2 className="fw-bold">UPI Payment</h2>
                <p className="mb-0">
                  Safe & Secure Payment
                </p>
              </div>

              {/* QR */}
              <div className="text-center mt-4">

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=demo@upi&pn=ShoppingStore"
                  alt="QR"
                  className="img-fluid border rounded-4 p-2"
                />

                <p className="mt-3 text-secondary">
                  Scan QR using PhonePe / GPay / Paytm
                </p>

              </div>

              {/* Divider */}
              <div className="text-center my-3">
                <b>OR</b>
              </div>

              {/* UPI */}
              <div className="px-4 pb-4">

                <label className="fw-bold mb-2">
                  Enter UPI ID
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="example@upi"
                  value={upiId}
                  onChange={(e) =>
                    setUpiId(e.target.value)
                  }
                />

                <button
                  className="btn btn-success w-100 mt-4 py-3 fw-bold"
                  onClick={payNow}
                >
                  Pay Now
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

export default AppUpiPayment;