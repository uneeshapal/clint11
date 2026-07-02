
import React from "react";
import Navbar from "./AppHeader";
import Footer from "./AppFooter";
import Sidebar from "./AppSidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function WomenCollection() {

  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Make Up",
      price: "₹999",
      image:
        "https://modarta.in/cdn/shop/files/03_4a7c6a9a-09e1-4edc-9828-19ac149552c5_1500x.jpg?v=1691570186",
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
    },
    {
      id: 3,
      name: "Brown Heels",
      price: "₹1299",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    },
    {
      id: 4,
      name: "Floral Dress",
      price: "₹1499",
      image:
        "https://img.tatacliq.com/images/i28/437Wx649H/MP000000029192310_437Wx649H_202511161208551.jpeg",
    },
    {
      id: 5,
      name: "Stylish Kurti",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500",
    },
    {
      id: 6,
      name: "Women Sunglasses",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 7,
      name: "Casual Shoes",
      price: "₹1199",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 8,
      name: "Brown Purse",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
  ];

  return (
<>
  <Navbar />

  <div className="container mt-4">
    <div className="row">

      {/* Sidebar */}
   <Sidebar/>

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
                  <h6 className="fw-bold text-danger">{item.price}</h6>

          <button
  className="btn text-white w-100"
  style={{ backgroundColor: "brown" }}
  onClick={() =>
    navigate("/product", {
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


  <Footer />
</>
  );
}

export default WomenCollection;

