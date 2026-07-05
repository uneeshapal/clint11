import React from "react";
import Sidebar from "./AppSidebar";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Electronics() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "DSLR Camera",
      price: "₹45999",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: "₹69999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
    },
    {
      id: 6,
      name: "iPhone",
      price: "₹79999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 7,
      name: "LED TV",
      price: "₹39999",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    },
    {
      id: 8,
      name: "Gaming Mouse",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
  ];

  return (
    <>
      <div className="container mt-4">

        <div className="row">

          <Sidebar />

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

                <div className="col-md-4 mb-4" key={item.id}>

                  <div className="card shadow border-0 h-100">

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
                        {item.price}
                      </h6>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          navigate("/electronics/product", {
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

      </div>
    </>
  );
}

export default Electronics;