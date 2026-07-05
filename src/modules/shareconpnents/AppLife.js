import React from "react";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function HomeLifestyle() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Luxury Sofa",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    },
    {
      id: 3,
      name: "Modern Floor Lamp",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500",
    },
    {
      id: 4,
      name: "Wall Clock",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
    },
    {
      id: 5,
      name: "Indoor Plant",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    },
    {
      id: 6,
      name: "Bed Sheet Set",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    },
    {
      id: 7,
      name: "Kitchen Cookware Set",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?w=500",
    },
    {
      id: 8,
      name: "Decor Vase",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
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

                <div className="col-md-4 mb-4" key={item.id}>

                  <div className="card shadow border-0 h-100 rounded-4">

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
                        {item.price}
                      </h6>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          navigate("/lifestyle/product", {
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

export default HomeLifestyle;