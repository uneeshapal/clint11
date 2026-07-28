
import React from "react";
import "../../css/global.css"
import Sidebar from "./AppSidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

function WomenCollection() {

  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Make Up",
      price: "₹999",
      oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://modarta.in/cdn/shop/files/03_4a7c6a9a-09e1-4edc-9828-19ac149552c5_1500x.jpg?v=1691570186",
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: "₹799",
      oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
    },
    {
      id: 3,
      name: "Brown Heels",
      price: "₹1299",
      oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    },
    {
      id: 4,
      name: "Floral Dress",
      price: "₹1499",
      oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://img.tatacliq.com/images/i28/437Wx649H/MP000000029192310_437Wx649H_202511161208551.jpeg",
    },
    {
      id: 5,
      name: "Stylish Kurti",
      price: "₹899", oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500",
    },
    {
      id: 6,
      name: "Women Sunglasses",
      price: "₹599", oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 7,
      name: "Casual Shoes",
      price: "₹1199", oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 8,
      name: "Brown Purse",
      price: "₹699", oldPrice: "₹1499",
      discount: "33% OFF",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
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
                          ({item.rating})
                        </span>
                      </div>

                      <h5 className="text-danger fw-bold">
                        {item.price}
                        <del className="text-secondary ms-2">
                          {item.oldPrice}
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

