import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./AppSidebar";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Electronics() {

  const navigate = useNavigate();

const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts();
}, []);

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8700/products");

    const electronicsProducts = res.data.products.filter(
      (item) => item.category === "Electronics"
    );

    setProducts(electronicsProducts);
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

            <div
              className="text-white text-center rounded shadow p-5"
              style={{
                background:
                  "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
              }}
            >
              <h1 className="fw-bold">Electronics Collection</h1>

              <p className="fs-5">
                Explore Latest Gadgets & Electronics
              </p>
            </div>

            <div className="row mt-4">

              {products.map((item) => (

                <div className="col-md-4 mb-4" key={item._id}>

                  <div
                    className="card shadow border-0 h-100"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate("/electronics/product", {
                        state: item,
                      })
                    }
                  >

                    <img
                      src={item.image}
                      alt=""
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
                          navigate("/electronics/product", {
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

      </div>
    </>
  );
}

export default Electronics;