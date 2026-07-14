import React from "react";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function SportsCollection() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Football",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500",
    },
    {
      id: 2,
      name: "Cricket Bat",
      price: "₹1899",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500",
    },
    {
      id: 3,
      name: "Basketball",
      price: "₹1199",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 5,
      name: "Gym Dumbbells",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    },
    {
      id: 6,
      name: "Sports T-Shirt",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    },
    {
      id: 7,
      name: "Badminton Racket",
      price: "₹1699",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500",
    },
    {
      id: 8,
      name: "Fitness Tracker",
      price: "₹2999",
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
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
                background: "linear-gradient(to right,#11998e,#38ef7d)",
              }}
            >
              <h1 className="fw-bold">Sports Collection</h1>

              <p className="fs-5">
                Discover premium sports equipment, fitness gear and activewear
                for every athlete.
              </p>
            </div>

            {/* Products */}
            <div className="row mt-4">
              {products.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <div className="card h-100 shadow border-0 rounded-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{
                        height: "280px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body text-center">

                      <h5>{item.name}</h5>

                      <h6 className="fw-bold text-success">
                        {item.price}
                      </h6>

                      <button
                        className="btn text-white w-100"
                        style={{
                          background:
                            "linear-gradient(to right,#11998e,#38ef7d)",
                        }}
                        onClick={() =>
                          navigate("/sports/product", {
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

export default SportsCollection;