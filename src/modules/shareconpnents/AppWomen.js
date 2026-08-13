
import React from "react";
import "../../css/global.css"
import Sidebar from "./AppSidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function WomenCollection() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8700/products");

      const womenProducts = res.data.products.filter(
        (item) => item.category === "Women"
      );

      setProducts(womenProducts);
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
              style={{ backgroundColor: "brown" }}
            >
              <h1 className="fw-bold">Women's Collection</h1>
              <p className="fs-5">
                Discover the latest trends in fashion and accessories.
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
                      navigate("/women/product", {
                        state: item,
                      })
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top product-image"
                      style={{
                        height: "280px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">

                      <div className="d-flex justify-content-between">
                        <span className="badge bg-success fs-6">
                          {item.discount}
                        </span>

                        <FaHeart color="red" size={20} />
                      </div>

                      <h5 className="mt-3 fw-bold">
                        {item.name}
                      </h5>

                      <div className="text-warning mb-2">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <span className="text-dark ms-2">

                        </span>
                      </div>

                      <h5 className="text-danger fw-bold">
                        ₹{item.price}
                        <del className="text-secondary ms-2">
                          ₹{item.oldPrice}
                        </del>
                      </h5>

                      <div className="d-grid gap-2 mt-3">

                        <button
                          className="btn btn-outline-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/women/product", {
                              state: item,
                            });
                          }}
                        >
                          <FaShoppingCart /> Add to Cart
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/women/product", {
                              state: item,
                            });
                          }}
                        >
                          Buy Now
                        </button>

                      </div>

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

export default WomenCollection;

