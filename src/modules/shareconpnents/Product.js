// src/modules/sharecomponents/ProductDetails.js
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function ProductDetails() {
  const { state } = useLocation();
  const product = state;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();
  const addtocart = () => {

    const email = sessionStorage.getItem("currentuser");

    axios.post("http://localhost:8700/addcart", {
      email,
      productid: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      color,
      size
    })
      .then((res) => {
        toast.success(" Product Added To Cart");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });

  };


  return (

    <>
      <ToastContainer position="top-right" autoClose={2000} />

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

            <div className="d-flex align-items-center gap-2 mt-2">
              <span className="badge bg-success">
                ★ 4.8
              </span>

              <span className="text-muted">
                2,345 Ratings
              </span>

              <span className="badge bg-success">
                In Stock
              </span>
            </div>

            <hr />

            <h2 className="text-danger fw-bold">
              {product.price}

              <span className="text-muted text-decoration-line-through fs-5 ms-3">
                ₹1999
              </span>

              <span className="badge bg-success ms-3">
                50% OFF
              </span>
            </h2>

            <p className="text-success fw-bold">
              Save ₹1000
            </p>

            <h5 className="mt-4">Description</h5>

            <p className="text-secondary">
              Premium quality product with excellent finishing,
              lightweight, durable and stylish. Perfect for daily use.
            </p>

            <div className="alert alert-success mt-3">
              🚚 Free Delivery Tomorrow <br />
              ✔ Cash On Delivery Available
            </div>

            <h5 className="mt-4">Color</h5>

            <div className="d-flex gap-2">

              <button
                className={`btn rounded-circle p-3 ${color === "Black" ? "border border-3 border-warning" : "btn-dark"}`}
                style={{ background: "black" }}
                onClick={() => setColor("Black")}
              ></button>

              <button
                className={`btn rounded-circle p-3 ${color === "Red" ? "border border-3 border-warning" : "btn-danger"}`}
                onClick={() => setColor("Red")}
              ></button>

              <button
                className={`btn rounded-circle p-3 ${color === "Blue" ? "border border-3 border-warning" : "btn-primary"}`}
                onClick={() => setColor("Blue")}
              ></button>

            </div>

            <p className="fw-bold mt-2">
              Selected Color :
              <span className="text-primary ms-2">
                {color}
              </span>
            </p>

            <h5 className="mt-4">Size</h5>

            <div className="d-flex gap-2">
              {["S", "M", "L", "XL"].map((item) => (
                <button
                  key={item}
                  className={`btn ${size === item
                    ? "btn-dark"
                    : "btn-outline-dark"
                    }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <h5 className="mt-4">Quantity</h5>

            <div className="border rounded d-inline-flex align-items-center p-1">

              <button
                className="btn"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>

              <span className="px-4 fw-bold">
                {quantity}
              </span>

              <button
                className="btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>

            </div>
            <div className="mt-4">

              <input
                type="text"
                className="form-control w-50"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />

              <button
                className="btn btn-success mt-2"
                onClick={() => {
                  if (pincode.trim() === "") {
                    toast.warning("Please Enter Pincode");
                  } else if (pincode.length !== 6) {
                    toast.error(" Enter Valid 6 Digit Pincode");
                  } else {
                    toast.success("Delivery Available");
                  }
                }}
              >
                Check Delivery
              </button>

            </div>

            <div className="mt-4 d-flex gap-3">

              <button
                className="btn btn-danger px-5"
                onClick={addtocart}
              >
                🛒 Add to Cart
              </button>

              <button
                className="btn btn-danger"
                onClick={() =>
                  navigate("/women/product/buynow", {
                    state: {
                      ...product,
                      quantity,
                      color,
                      size
                    }
                  })
                }
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* Description */}
        <div className="bg-white shadow rounded p-4 mt-4">

          <h3>Product Details</h3>

         <table className="table">

<tbody>

<tr>
<td>Brand</td>
<td>ShopEase</td>
</tr>

<tr>
<td>Material</td>
<td>Premium Quality</td>
</tr>

<tr>
<td>Warranty</td>
<td>1 Year</td>
</tr>

<tr>
<td>Country</td>
<td>India</td>
</tr>

</tbody>

</table>

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

    </>
  );

}


export default ProductDetails;