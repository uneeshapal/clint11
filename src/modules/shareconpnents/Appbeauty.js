import React from "react";
import Sidebar from "./AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function BeautyCollection() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Vitamin C Face Serum",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
    },
    {
      id: 2,
      name: "Matte Lipstick",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    },
    {
      id: 3,
      name: "Hydrating Face Wash",
      price: "₹399",
      image:
        "https://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp",
    },
    {
      id: 4,
      name: "Daily Moisturizer",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500",
    },
    {
      id: 5,
      name: "SPF 50 Sunscreen",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500",
    },
    {
      id: 6,
      name: "Liquid Foundation",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
    },
    {
      id: 7,
      name: "Eyeshadow Palette",
      price: "₹1299",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    },
    {
      id: 8,
      name: "Luxury Perfume",
      price: "₹1499",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/057/278/471/small/mockup-limpid-clear-glass-packaging-perfume-bottle-in-black-fabric-photo.jpg",
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">

          {/* Sidebar */}
          <Sidebar />

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

                      <h6 className="fw-bold text-danger">
                        {item.price}
                      </h6>

                      <button
                        className="btn text-white w-100"
                        style={{
                          background:
                            "linear-gradient(to right,#ff758c,#ff7eb3)",
                        }}
                        onClick={() =>
                          navigate("/beauty/product", {
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