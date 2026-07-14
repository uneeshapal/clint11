import React from "react";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function MenCollection() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Denim Jacket",
      price: "₹1599",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    },
    {
      id: 2,
      name: "Formal Shirt",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    },
    {
      id: 3,
      name: "Leather Shoes",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 4,
      name: "Men's Watch",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    },
    {
      id: 5,
      name: "Hoodie",
      price: "₹1299",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    },
    {
      id: 6,
      name: "Jeans",
      price: "₹1399",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    },
    {
      id: 7,
      name: "Sports Shoes",
      price: "₹2199",
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22015298/vpavic_4278_20201030_0120.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100",
    },
    {
      id: 8,
      name: "Leather Wallet",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    },
  ];

  return (
    <>
      <div className="container mt-4">

        <div className="row">

          <Sidebar />

          <div className="col-md-9">

            <div
              className="text-center text-white rounded shadow p-5"
              style={{
                background:
                  "linear-gradient(to right,#0f2027,#203a43,#2c5364)",
              }}
            >
              <h1 className="fw-bold">Men's Collection</h1>

              <p className="fs-5">
                Explore Premium Men's Fashion & Accessories
              </p>
            </div>

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

                      <h6 className="fw-bold text-primary">
                        {item.price}
                      </h6>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          navigate("/men/product", {
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

export default MenCollection;