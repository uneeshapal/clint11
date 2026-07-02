// src/modules/sharecomponents/ProductDetails.js
import Navbar from "./AppHeader";
import Footer from "./AppFooter";
import { useLocation } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const { state } = useLocation();
  const product = state;
  const addtocart = () => {

  const email = sessionStorage.getItem("currentuser");

  axios.post("http://localhost:8700/addcart", {
    email: email,
    productid: product.id,
    name: product.name,
    price: product.price,
    image: product.image
  })
  .then((res) => {
    alert("Your order is added to your cart");
  })
  .catch((err) => {
    console.log(err);
  });

};
    const addToCart = () => {
    alert(" Your order is added to your cart.");
  };

  return (

 <>
  <Navbar />

  <div className="container py-5">
    <div className="row bg-white shadow rounded p-4">
        

      {/* Left Side */}
      <div className="col-lg-5">

        <div className="row">
          <div className="col-2">
            <img src={product.image} className="img-fluid border mb-2 rounded" alt="" />
            <img src={product.image} className="img-fluid border mb-2 rounded" alt="" />
            <img src={product.image} className="img-fluid border rounded" alt="" />
          </div>

          <div className="col-10">
            <img
              src={product.image}
              className="img-fluid rounded border"
              style={{ height: "500px", objectFit: "cover", width: "100%" }}
              alt=""
            />
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="col-lg-7">

        <h2 className="fw-bold">{product.name}</h2>

        <span className="badge bg-success fs-6">
          ★ 4.8
        </span>

        <span className="ms-2 text-muted">
          2,345 Ratings
        </span>

        <hr />

        <h2 className="text-danger fw-bold">
          {product.price}
          <span className="text-muted text-decoration-line-through fs-5 ms-3">
            ₹1999
          </span>

          <span className="text-success fs-5 ms-3">
            50% OFF
          </span>
        </h2>

        <h5 className="mt-4">Description</h5>

        <p className="text-secondary">
          Premium quality product with excellent finishing,
          lightweight, durable and stylish. Perfect for daily use.
        </p>

        <h5 className="mt-4">Color</h5>

        <div className="d-flex gap-2">
          <button className="btn btn-dark rounded-circle p-3"></button>
          <button className="btn btn-danger rounded-circle p-3"></button>
          <button className="btn btn-primary rounded-circle p-3"></button>
        </div>

        <h5 className="mt-4">Size</h5>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark">S</button>
          <button className="btn btn-outline-dark">M</button>
          <button className="btn btn-outline-dark">L</button>
          <button className="btn btn-outline-dark">XL</button>
        </div>

        <h5 className="mt-4">Quantity</h5>

        <div className="d-flex align-items-center">

          <button className="btn btn-outline-secondary">-</button>

          <span className="mx-3 fs-5">1</span>

          <button className="btn btn-outline-secondary">+</button>

        </div>

        <div className="mt-4">

          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter Pincode"
          />

        </div>

        <div className="mt-4 d-flex gap-3">

<button
  className="btn btn-warning px-5"
  onClick={addtocart}
>
  🛒 Add to Cart
</button>

          <button className="btn btn-danger px-5">
            Buy Now
          </button>

        </div>

      </div>

    </div>

    {/* Description */}
    <div className="bg-white shadow rounded p-4 mt-4">

      <h3>Product Details</h3>

      <p>
        • Premium Quality Material <br />
        • Easy Returns <br />
        • 100% Original Product <br />
        • Cash on Delivery Available <br />
        • Fast Delivery
      </p>

    </div>

    {/* Reviews */}
    <div className="bg-white shadow rounded p-4 mt-4">

      <h3>Customer Reviews</h3>

      <p> Amazing Product</p>
      <p>Very Good Quality</p>
      <p> Worth the Price</p>

    </div>

  </div>

   <button
      className="btn btn-danger d-block mx-auto mt-4"
      onClick={() => (window.location.href = "/")}
    >
      Back to Home
    </button>
  <Footer />
</>
  );
  
}


export default ProductDetails;