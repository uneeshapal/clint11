import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Medicine() {

  const navigate = useNavigate();

const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts();
}, []);

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8700/products");

    const medicineProducts = res.data.products.filter(
      (item) => item.category === "Medicine"
    );

    setProducts(medicineProducts);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <div className="container mt-4">
        <div className="row">

         {/* Sidebar */}
<div className="col-md-3">
  <Sidebar />
</div>

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

                <div className="col-md-4 mb-4" key={item._id}>

                  <div
                    className="card shadow border-0 h-100 rounded-4"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate("/medicine/product", {
                        state: item,
                      })
                    }
                  >

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
                        ₹{item.price}
                      </h6>

                      <button
                        className="btn btn-success w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/medicine/product", {
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