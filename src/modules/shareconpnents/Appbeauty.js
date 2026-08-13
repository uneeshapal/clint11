import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function BeautyCollection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts();
}, []);

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8700/products");

    const beautyProducts = res.data.products.filter(
      (item) => item.category === "Beauty"
    );

    setProducts(beautyProducts);
  } catch (err) {
    console.log(err);
  }
};

 

  return (
    <>
      <div className="container mt-4">
        <div className="row">

          {/* Sidebar */}
        {/* Sidebar */}
<div className="col-md-3">
  <Sidebar />
</div>

          {/* Main Content */}
          <div className="col-md-9">

            {/* Banner */}
            <div
              className="text-center text-white rounded shadow p-5"
              style={{
                background:
                  "linear-gradient(to right, #ff758c, #ff7eb3)",
              }}
            >
              <h1 className="fw-bold">
                Skincare & Makeup Collection
              </h1>

              <p className="fs-5">
                Discover premium skincare, makeup, and beauty essentials for
                your everyday glow.
              </p>
            </div>

            {/* Products */}
            <div className="row mt-4">
              {products.map((item) => (
                <div className="col-md-4 mb-4" key={item._id}>
                  <div
                    className="card h-100 shadow border-0 rounded-4"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate("/beauty/product", {
                        state: item,
                      })
                    }
                  >

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

                      <h6 className="fw-bold text-danger">
                        ₹{item.price}
                      </h6>

                      <button
                        className="btn text-white w-100"
                        style={{
                          background: "linear-gradient(to right,#ff758c,#ff7eb3)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/beauty/product", {
                            state: item,
                          });
                        }}
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

        {/* Back Button */}
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

export default BeautyCollection;