import React from "react";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Medicine() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Paracetamol Tablets",
      price: "₹50",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
    },
    {
      id: 2,
      name: "Digital Thermometer",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500",
    },
    {
      id: 3,
      name: "Blood Pressure Monitor",
      price: "₹1999",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
    },
    {
      id: 4,
      name: "Face Mask Pack",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500",
    },
    {
      id: 5,
      name: "Hand Sanitizer",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500",
    },
    {
      id: 6,
      name: "First Aid Kit",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500",
    },
    {
      id: 7,
      name: "Vitamin C Tablets",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
    },
    {
      id: 8,
      name: "Protein Powder",
      price: "₹1499",
      image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=500",
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">

          <Sidebar />

          <div className="col-md-9">

            {/* Banner */}

            <div
              className="text-center text-white rounded shadow p-5"
              style={{
                background: "linear-gradient(to right,#11998e,#38ef7d)"
              }}
            >
              <h1 className="fw-bold">Medicine & Healthcare</h1>

              <p className="fs-5">
                Trusted Healthcare Products For Your Family
              </p>
            </div>

            {/* Products */}

            <div className="row mt-4">

              {products.map((item) => (

                <div className="col-md-4 mb-4" key={item.id}>

                  <div className="card shadow border-0 h-100 rounded-4">

                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{
                        height: "260px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="card-body text-center">

                      <h5>{item.name}</h5>

                      <h6 className="text-success fw-bold">
                        {item.price}
                      </h6>

                      <button
                        className="btn btn-success w-100"
                        onClick={() =>
                          navigate("/medicine/product", {
                            state: item,
                          })
                        }
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        <button
          className="btn btn-danger d-block mx-auto mt-4"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>

      </div>
    </>
  );
}

export default Medicine;