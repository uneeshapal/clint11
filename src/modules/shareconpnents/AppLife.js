import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function HomeLifestyle() {

  const navigate = useNavigate();

const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts();
}, []);

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8700/products");

    const lifestyleProducts = res.data.products.filter(
      (item) => item.category === "Lifestyle"
    );

    setProducts(lifestyleProducts);
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
                background:
                  "linear-gradient(to right,#8e44ad,#c0392b)"
              }}
            >
              <h1 className="fw-bold">
                Home & Lifestyle
              </h1>

              <p className="fs-5">
                Make Your Home Beautiful & Comfortable
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
                      navigate("/lifestyle/product", {
                        state: item,
                      })
                    }
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body text-center">

                      <h5>{item.name}</h5>

                      <h6 className="text-danger fw-bold">
                        ₹{item.price}
                      </h6>

                      <button
                        className="btn btn-danger w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/lifestyle/product", {
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

export default HomeLifestyle;